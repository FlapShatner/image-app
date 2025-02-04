'use client';
import { useState } from 'react';
import ImageUpload from './image-upload';
import UploadedImage from './uploaded-image';
import ClearImage from './clear-image';
// import { UploadData } from '@/lib/uploadthing';
import Loader from '../loader';

export type UserImageData = {
  image: string
};

export default function Frame() {
  const [imageData, setImageData] = useState<UserImageData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="w-full bg-neutral-800">
      <div className="flex flex-col h-[100vh] w-full items-center justify-center p-4">
        {imageData?.image ? (
          <UploadedImage imageData={imageData} />
        ) : isProcessing ? (
          <Loader />
        ) : (
          <ImageUpload setImageData={setImageData} setIsProcessing={setIsProcessing} />
        )}
        {imageData?.image && <ClearImage setImageData={setImageData} />}
      </div>
    </div>
  );
}
