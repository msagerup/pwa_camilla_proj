'use client';

import ContentHeaderStyled from '@/components/headers/contentHeaderStyle';
import ComposedChartData from '../../visual/ComposedChart';

const OutPutStatistics = () => {
  return (
    <div className='mt-[80px]'>
      <ContentHeaderStyled
        title='Fluid output'
        subTitle='This graph shows fluid output per day / per entry.'
      />

      <div className='pt-[190px]'>
        <ComposedChartData />
      </div>
    </div>
  );
};

export default OutPutStatistics;
