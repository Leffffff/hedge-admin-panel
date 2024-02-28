import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='absolute flex h-2/5 w-full flex-col items-center justify-center'>
        <div className='fixed bottom-0 h-2/5 w-full'>
          <Image src={'/lines.svg'} alt='logo' fill />
        </div>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-between p-24 py-[300px]'>
        <Image src={'/logo.svg'} width={517} height={120} alt='logo' />
        <h2 className='text-center text-4xl text-blue-500'>
          Ecosystem Administration Panel
        </h2>
        <Link
          href='/reserves'
          className='relative z-10 flex h-[54px] w-[269px] items-center justify-center gap-[10px] rounded-2xl border-2 border-blue-600'
        >
          <Image src={'/wallet.svg'} width={24} height={24} alt='logo' />
          <div className='text-base text-blue-600'>Connect Wallet</div>
        </Link>
      </div>
    </main>
  );
}
