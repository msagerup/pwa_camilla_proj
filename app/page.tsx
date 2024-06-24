import { DataTable } from '@/components/DataTable';
import CircleBar from '@/components/circleBar';
import MainPageHeader from '@/components/headers/pageHeader/mainPage';

export default function Home() {
  return (
    <div className='container px-5 mx-auto text-center text-2xl'>
      <div>
        <div className='mt-10 '>
          <MainPageHeader />
        </div>
      </div>
      <div className='pt-2  sticky top-0 '>
        <CircleBar />
      </div>
      <div className='pb-5'>
        <DataTable />
      </div>
    </div>
  );
}
