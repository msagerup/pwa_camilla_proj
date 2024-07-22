'use client';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

import { useGlobalContext } from '@/context/store';
import { getTablesFromDate } from '@/utils/helpers/supabaseQuerys';
import { FluidRecord } from '@/utils/types';
import { useEffect, useState } from 'react';

const CircleBar = () => {
  const [circlePercentage, setCirclePercentage] = useState<number>(0);
  const [fluidInput, setFluidInput] = useState<FluidRecord[]>([]);
  const [fluidOutput, setFluidOutput] = useState<FluidRecord[]>([]);

  const { activeDate } = useGlobalContext();

  // Fetch initial data
  const fetchAllRecords = async (type: string) => {
    if (type === 'input') {
      const { data, error } = await getTablesFromDate({
        tableName: 'fluid_input',
        activeDate,
      });
      setFluidInput(data);
    } else {
      const { data, error } = await getTablesFromDate({
        tableName: 'fluid_output',
        activeDate,
      });
      setFluidOutput(data);
    }
  };

  // Update the view with real-time changes
  const subscribeToInputChanges = () => {
    supabase
      .channel('input_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'fluid_input',
        },
        (payload: any) => {
          // Handle the real-time payload
          switch (payload.eventType) {
            case 'INSERT':
              setFluidInput((prevRecords) => [...prevRecords, payload.new]);
              break;
            case 'UPDATE':
              setFluidInput((prevRecords) =>
                prevRecords.map((record) =>
                  record.id === payload.new.id ? payload.new : record
                )
              );
              break;
            case 'DELETE':
              setFluidInput((prevRecords) =>
                prevRecords.filter((record) => record.id !== payload.old.id)
              );
              break;
            default:
              break;
          }
        }
      )
      .subscribe();
  };

  // Update the view with real-time changes
  const subscribeToOutputChanges = () => {
    supabase
      .channel('output_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'fluid_output',
        },
        (payload: any) => {
          // Handle the real-time payload
          switch (payload.eventType) {
            case 'INSERT':
              setFluidOutput((prevRecords) => [...prevRecords, payload.new]);
              break;
            case 'UPDATE':
              setFluidOutput((prevRecords) =>
                prevRecords.map((record) =>
                  record.id === payload.new.id ? payload.new : record
                )
              );
              break;
            case 'DELETE':
              setFluidOutput((prevRecords) =>
                prevRecords.filter((record) => record.id !== payload.old.id)
              );
              break;
            default:
              break;
          }
        }
      )
      .subscribe();
  };

  useEffect(() => {
    fetchAllRecords('input');
    fetchAllRecords('output');
    subscribeToInputChanges();
    subscribeToOutputChanges();
    // calculateValues();
  }, [activeDate]);

  useEffect(() => {
    const totalInputPutMl = fluidInput?.reduce((prev, current) => {
      return prev + current.amount;
    }, 0);

    let totalOutPutMl = fluidOutput?.reduce((prev, current) => {
      return prev + current.amount;
    }, 0);

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
  }, [fluidInput, fluidOutput]);

  return (
    <div className=''>
      <div className='circle-container'>
        <div className='circle'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave _0'></div>
        <div className='wave-below _0'></div>
        <div className='desc flex items-center'>
          <h2>{activeDate}</h2>
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
