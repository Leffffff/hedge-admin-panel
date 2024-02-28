import SidePanel from '@/components/SidePanel';
import Header from '@/components/Header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full'>
      <SidePanel />
      <div className='w-full'>
        <Header />
        {children}
      </div>
    </div>
  );
}
