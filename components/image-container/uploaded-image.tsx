import Image from 'next/image';
import { useWindowSize } from 'usehooks-ts';

export default function UploadedImage({ image }: { image: string }) {
  const { height } = useWindowSize();
  const imageHeight = height * 0.8;
  return (
    <Image
      unoptimized
      style={{ width: 'max-content', maxHeight: imageHeight }}
      className="object-contain shadow-lg my-auto"
      src={image}
      alt="uploaded image"
      width={900}
      height={900}
    />
  );
}
