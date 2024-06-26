import { LoginCode } from '@/components/LoginCode';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=' h-screen flex flex-col justify-between  bg-blue-300'>
      <div className='py-16 bg-white'>
        <div className='flex items-center justify-center'>
          <Image
            src='/images/long_logo.png'
            height={350}
            width={350}
            alt='logo'
          />
        </div>
      </div>
      <div className='container px-5 mx-auto'>
        <div className='bg-gray-100 py-5 flex  justify-center '>
          <LoginCode />
        </div>
      </div>
      <div></div>
    </div>
  );
}
