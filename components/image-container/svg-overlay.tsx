import { extractPathData } from '@/utils/data-utils';
import { UserImageData } from './frame';

export default function SvgOverlay({
  imageData,
}: {
  imageData: UserImageData;
}) {
  const pathData = extractPathData(imageData.pathTag);

  return (
    <div className="absolute top-0 left-0 object-contain w-full h-full">
      <svg
        height={imageData.originalHeight}
        width={imageData.originalWidth}
        className="w-full h-full"
        viewBox={`0 0 ${imageData.originalWidth} ${imageData.originalHeight} `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#ffffff"
        strokeWidth={3}
      >
        <path d={pathData} />
      </svg>
    </div>
  );
}
