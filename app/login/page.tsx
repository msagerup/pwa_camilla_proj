import { LoginCode } from '@/components/LoginCode';
import MainPageHeader from '@/components/headers/pageHeader/mainPage';

export default function Home() {
  return (
    <div className=' h-screen flex flex-col justify-between  bg-blue-300'>
      <div className='py-20 bg-white'>
        <MainPageHeader />
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
