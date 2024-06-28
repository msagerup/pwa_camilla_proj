import { DataTableFluidOut } from '@/components/DataTable/FluidOutput';
import CircleBar from '@/components/circleBar';

const LiquidOutput = () => {
  return (
    <div className='container px-5 mx-auto text-center text-2xl'>
      <div className='pt-2 flex justify-center items-center mt-[120px] mb-10'>
        <CircleBar />
      </div>
      <div className='pb-5'>
        <DataTableFluidOut />
      </div>
    </div>
  );
};

export default LiquidOutput;
