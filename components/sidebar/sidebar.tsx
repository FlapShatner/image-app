import BorderWidth from './border-width';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-[calc(100vh-.5rem)] min-w-[400px] border border-white/30 rounded-lg bg-neutral-900 m-1">
      <div className="text-center w-full h-full p-6 pt-4">
        <p className="mb-4 text-lg font-bold">Options</p>
        <BorderWidth />
      </div>
    </div>
  );
}
