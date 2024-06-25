import { DataTable } from '@/components/DataTable';
import CircleBar from '@/components/circleBar';

export default function Home() {
  return (
    <div className='container px-5 mx-auto text-center text-2xl'>
      <div className=''>
        {/* <div className='mt-10 '>
        <MainPageHeader />
      </div> */}
        {/* <MainPageHeader /> */}
      </div>
      <div className='pt-2 flex justify-center items-center mt-[120px] mb-10'>
        <CircleBar />
      </div>
      <div className='pb-5'>
        <DataTable />
      </div>
    </div>
  );
}
