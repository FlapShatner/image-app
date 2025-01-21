'use client';
// import { useState } from 'react';
import { UploadDropzone } from '@/utils/uploadthing';

export default function Upload() {
  //   const [image, setImage] = useState<string | null>(null);

  return (
    <div className=" flex flex-col items-center justify-center border-2 border-gray-200/30 border-dashed rounded-lg p-4">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
        }}
      />
    </div>
  );
}
