'use client';
import { useState } from 'react';
// import Upload from './upload';
import ImageUpload from './image-upload';
import UploadedImage from './uploaded-image';
import ClearImage from './clear-image';

export default function Frame() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-neutral-800">
      <div className="flex flex-col h-[100vh] w-full items-center justify-center p-4">
        {image ? (
          <UploadedImage image={image} />
        ) : (
          <ImageUpload setImage={setImage} />
        )}
        {image && <ClearImage setImage={setImage} />}
      </div>
    </div>
  );
}
