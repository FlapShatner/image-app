import Frame from '@/components/image-container/frame';
import Sidebar from '@/components/sidebar/sidebar';

export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <Frame />
      <Sidebar />
    </div>
  );
}
