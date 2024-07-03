'use client';

import { getAllTables } from '@/utils/helpers/supabaseQuerys';
import { FluidRecord } from '@/utils/types';
import { useEffect, useState } from 'react';


// const WaveAnimation = () => {
//   const [percentage, setPercentage] = useState(0);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setPercentage(value);

//     const wavePosition = 105 - value;
//     let clipPosition = 105 - value * 1.1;

//     if (value > 45) {
//       clipPosition = 105 - value + 5.2;
//     }

//     console.log(clipPosition, wavePosition);

//     // Dynamically set inline styles
//     const root = document.documentElement;
//     root.style.setProperty('--wave-position', `${wavePosition}%`);
//     root.style.setProperty('--wave-fillPosition', `${clipPosition}%`);
//     // root.style.setProperty('--circle-todayText', 'white');

//     if (value > 50) {
//       root.style.setProperty('--circle-todayText', 'blue');
//       root.style.setProperty('--circle-todayPercentage', 'white');
//     }
//   };

//   return (
//     <div className='container'>
//       <input
//         type='range'
//         min='0'
//         max='100'
//         value={percentage}
//         onChange={handleInputChange}
//         className='slider'
//       />
//     </div>
//   );
// };

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

        // Change css style section
        const percentage = Math.trunc((totalInputPutMl / totalOutPutMl) * 100);

        const wavePosition = 105 - percentage;
        let clipPosition = 105 - percentage * 1.1;

        if (percentage > 45) {
          clipPosition = 105 - percentage + 5.2;
        }

        // Dynamically set inline styles
        const root = document.documentElement;

        root.style.setProperty('--wave-position', `${wavePosition}%`);
        root.style.setProperty('--wave-fillPosition', `${clipPosition}%`);

        setCirclePercentage(percentage);
      } catch (error) {
        console.error('Something went wrong, Circlebar comp.', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className=''>
      {/* <WaveAnimation /> */}
      <div className='circle-container'>
        <div className='circle'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave-below _0'></div>
        <div className='desc flex items-center'>
          <h2>Today</h2>
          <p>
            <b className='text-4xl'>
              {circlePercentage}

              <span>%</span>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleBar;
