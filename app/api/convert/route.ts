import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const metadata = await sharp(buffer).metadata();
    
    // If already PNG, return as is
    if (metadata.format === 'png') {
      return new NextResponse(buffer, {
        headers: { 'Content-Type': 'image/png' }
      });
    }
    
    // Convert to PNG
    const pngBuffer = await sharp(buffer)
      .toFormat('png')
      .toBuffer();

    return new NextResponse(pngBuffer, {
      headers: { 'Content-Type': 'image/png' }
    });
    
  } catch (error) {
    console.error('Error converting image:', error);
    return NextResponse.json(
      { error: 'Failed to convert image' },
      { status: 500 }
    );
  }
} 