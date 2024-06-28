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
        <ScrollArea className='h-[550px] '>
          <div className='mb-24'>
            <StatsCardTemplate
              image='/images/placeholder.svg'
              imageHeight='36'
              altImageText='Stats'
              header='test'
              desc='hello'
              buttonText='dfsd'
              link={''}
            />

            <StatsCardTemplate
              image='/images/placeholder.svg'
              imageHeight='36'
              altImageText='Stats'
              header='tessssst'
              desc='hello'
              buttonText='dfsd'
              link={''}
            />
            <StatsCardTemplate
              image='/images/placeholder.svg'
              imageHeight='36'
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
