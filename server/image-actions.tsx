'use server';

import { utapi } from "@/lib/uploadthing";

import sharp from "sharp";

export const convertToPng = async (formData: FormData) => {
    const imageFile = formData.get('file') as File;
    if (!imageFile) {
        console.error('No image file provided');
        return;
    }

    const imageBuffer = await imageFile.arrayBuffer();
    const sharpBuffer = await sharp(imageBuffer).toFormat('png').toBuffer()

    const imageString = sharpBuffer.toString('base64');
    const metadata = await sharp(imageBuffer).metadata();
    const { width, height, hasAlpha } = metadata;

    return {
        image: imageString,
        width,
        height,
        hasAlpha,
    };
};
