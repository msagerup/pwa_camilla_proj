'use client';

import StatsCardTemplate from '@/components/Cards/StatsCardsTemplate';
import MainPageHeader from '@/components/headers/pageHeader/mainPage';
import { ScrollArea } from '@/components/ui/scroll-area';

const LiquidPageOverview = () => {
  return (
    <div className='mt-[80px]'>
      <MainPageHeader
        title='Fluid chart statistics'
        subTitle='Chart statistics for input & output of fluid over time.'
      />
      <div className='container px-5 mx-auto  pt-[200px]'>
        <ScrollArea className='h-[550px] h-'>
          <div className='mb-24'>
            <StatsCardTemplate
              image='/images/placeholder.svg'
              altImageText='Stats'
              header='Fluid output chart'
              desc='Chart that show fluid output based on time and entries'
              buttonText='View chart'
              link='/charts/liquid/out_charts'
            />

            <StatsCardTemplate
              image='/images/placeholder.svg'
              altImageText='Stats'
              header='Fluid input chart'
              desc='Chart that show fluid output based on time and entries'
              buttonText='dfsd'
              link='/charts/liquid/input'
            />
            <StatsCardTemplate
              image='/images/placeholder.svg'
              altImageText='Stats'
              header='test'
              desc='hello'
              buttonText='dfsd'
              link={''}
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LiquidPageOverview;
