'use client';

import { Slider } from '../ui/slider';
import { useOptionsStore } from '../providers/options-store-provider';

function BorderWidth() {
  const borderWidth = useOptionsStore((state) => state.borderWidth);
  const setBorderWidth = useOptionsStore((state) => state.setBorderWidth);

  const widthLabels = ['Thin', 'Medium', 'Thick', 'Thickest'];

  const label = (value: number) => {
    const index = Math.round(value / 100 - 1);
    return widthLabels[index];
  };
  return (
    <div>
      <p className="mb-2 text-sm">Border Width</p>
      <Slider
        min={100}
        max={400}
        step={100}
        value={[borderWidth]}
        onValueChange={(value) => setBorderWidth(value[0])}
      />
      <p className="mt-2">{label(borderWidth)}</p>
    </div>
  );
}

export default BorderWidth;
