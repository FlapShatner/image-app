import { cn } from '@/utils/cn';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'react-feather';
import { UserImageData } from './frame';
import { useOptionsStore } from '../providers/options-store-provider';
function ImageUpload({
  setImageData,
  setIsProcessing,
}: {
  setImageData: (imageData: UserImageData) => void;
  setIsProcessing: (isProcessing: boolean) => void;
}) {
  const borderWidth = useOptionsStore((state) => state.borderWidth);
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setIsProcessing(true);
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        const params = new URLSearchParams();
        params.append('border_thickness', borderWidth.toString());
        const response = await fetch(
          `http://localhost:8000/process-image/?${params.toString()}`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the blob from the response
        const imageBlob = await response.blob();
        // Create a URL for the blob
        const imageUrl = URL.createObjectURL(imageBlob);

        setImageData({ image: imageUrl });
      } catch (error) {
        console.error('Error processing image:', error);
      } finally {
        setIsProcessing(false);
      }
    },
    [setImageData]
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        'image/*': [],
      },
      maxFiles: 1,
      maxSize: 5 * 1024 * 1024, // 5MB
    });

  return (
    <div
      className={cn(
        'group flex flex-col items-center justify-center border-2 border-neutral-500 rounded-lg border-dashed p-4 hover:bg-neutral-700 hover:border-neutral-300 transition-all duration-300 hover:scale-[102%] cursor-pointer hover:shadow-lg',
        isDragAccept
          ? 'bg-neutral-700 shadow-lg scale-[102%] border-neutral-300'
          : '',
        isDragReject ? 'border-red-400/60' : ''
      )}
      style={{
        willChange: 'transform',
      }}
      {...getRootProps()}
    >
      <Upload
        className={cn(
          'w-10 h-10 text-neutral-500 group-hover:text-neutral-300 transition-all duration-300',
          isDragAccept ? 'text-neutral-300' : '',
          isDragReject ? 'text-red-400/60' : ''
        )}
      />
      <input {...getInputProps()} />
      <p
        className={cn(
          'text-neutral-500 group-hover:text-neutral-300 transition-all duration-300',
          isDragAccept ? 'text-neutral-300' : '',
          isDragReject ? 'text-red-400/60' : ''
        )}
        style={{
          willChange: 'transform',
        }}
      >
        Drag n drop image here, or click to select
      </p>
      <p
        style={{
          willChange: 'transform',
        }}
        className={cn(
          'text-neutral-500/80 text-xs mt-2 transition-all duration-300',
          isDragAccept ? 'text-neutral-300' : '',
          isDragReject ? 'text-red-500' : ''
        )}
      >
        Supported formats: jpeg, jpg, png, webp, svg, tiff, tif
      </p>
    </div>
  );
}

export default ImageUpload;
