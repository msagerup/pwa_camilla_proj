'use client';

import { getAllTables } from '@/utils/helpers/supabaseQuerys';
import { FluidRecord } from '@/utils/types';
import { useEffect, useState } from 'react';

const CircleBar = () => {
  const [circlePercentage, setCirclePercentage] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        let liqInput = [] as FluidRecord[];
        let lioOutput = [] as FluidRecord[];

        await Promise.all([
          (await getAllTables({ tableName: 'fluid_input' })).data,
          (await getAllTables({ tableName: 'fluid_output' })).data,
        ]).then((values) => {
          values.forEach((records) => {
            records.forEach((record) => {
              if (record.fluidType === 'input') {
                liqInput.push(record);
              } else {
                lioOutput.push(record);
              }
            });
          });
        });

        const totalInputPutMl = liqInput.reduce((prev, current) => {
          return prev + current.amount;
        }, 0);

        let totalOutPutMl = lioOutput.reduce((prev, current) => {
          return prev + current.amount;
        }, 0);

        console.log(totalInputPutMl);
        console.log(totalOutPutMl);

        // Stop from calculating infante if output = 0
        if (totalOutPutMl === 0) {
          totalOutPutMl = 1;
        }

        // Change css style
        const percentage = (totalInputPutMl / totalOutPutMl) * 100;

        const root = document.documentElement;
        // root.style.setProperty('--wave-position', '110%');

        setCirclePercentage(Math.trunc(percentage));
      } catch (error) {
        console.error('Something went wrong, Circlebar comp.', error);
      }
    }
    fetchData();
    // return () => {
    //   second
    // }
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div className=''>
      <div className='circle-container'>
        <div className='circle'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave-below _0'></div>
        <div className='desc _0'>
          <h2>Today</h2>
          <p>
            <b>
              {circlePercentage}
              <span>%</span>
            </b>
          </p>
        </div>
      </div>
      {/* <div className='circle-container'>
        <div className='circle'></div>
        <div className='wave _50'></div>
        <div className='wave _50'></div>
        <div className='wave _50'></div>
        <div className='wave-below _50'></div>
        <div className='desc _50'>
          <h2>Today</h2>
          <p>
            <b>
              50<span>%</span>
            </b>
          </p>
        </div>
      </div> */}
      {/* <div className='circle-container'>
        <div className='circle'></div>
        <div className='wave _100'></div>
        <div className='wave _100'></div>
        <div className='wave _100'></div>
        <div className='wave-below _100'></div>
        <div className='desc _100'>
          <h2>Today</h2>
          <p>
            <b>
              100<span>%</span>
            </b>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CircleBar;
