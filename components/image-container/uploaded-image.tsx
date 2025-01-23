import Image from 'next/image';
import { useRef } from 'react';
import { useWindowSize } from 'usehooks-ts';
import SvgOverlay from './svg-overlay';
import { UserImageData } from './frame';

export default function UploadedImage({
  imageData,
}: {
  imageData: UserImageData;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const { height: windowHeight } = useWindowSize();
  const imageHeight = windowHeight * 0.8;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        ref={ref}
        unoptimized
        style={{ width: 'max-content', maxHeight: imageHeight }}
        className="object-contain shadow-lg my-auto"
        src={imageData.image}
        alt="uploaded image"
        width={900}
        height={900}
      />
      <SvgOverlay imageData={imageData} />
    </div>
  );
}
