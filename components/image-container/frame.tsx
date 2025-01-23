'use client';
import { useState } from 'react';
import ImageUpload from './image-upload';
import UploadedImage from './uploaded-image';
import ClearImage from './clear-image';

export type UserImageData = {
  image: string;
  pathTag: string;
  originalWidth: number;
  originalHeight: number;
};

export default function Frame() {
  const [imageData, setImageData] = useState<UserImageData | null>(null);

  return (
    <div className="w-full bg-neutral-800">
      <div className="flex flex-col h-[100vh] w-full items-center justify-center p-4">
        {imageData?.image ? (
          <UploadedImage imageData={imageData} />
        ) : (
          <ImageUpload setImageData={setImageData} />
        )}
        {imageData?.image && <ClearImage setImageData={setImageData} />}
      </div>
    </div>
  );
}
