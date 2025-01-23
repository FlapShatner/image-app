import { X } from 'react-feather';
import { UserImageData } from './frame';

export default function ClearImage({
  setImageData,
}: {
  setImageData: (imageData: UserImageData | null) => void;
}) {
  return (
    <div
      className="mt-auto px-6 py-2 rounded-full bg-white/40 text-neutral-800 font-bold flex items-center gap-2 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-lg"
      onClick={() => setImageData(null)}
    >
      <X /> Clear image
    </div>
  );
}
