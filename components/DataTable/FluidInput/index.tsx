'use client';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

import Modal from '@/components/Modal';
import { DeleteWarning } from '@/components/Modal/Alert';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGlobalContext } from '@/context/store';
import { getAllTables } from '@/utils/helpers/supabaseQuerys';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import ContentHeader from '../../headers/contentHeader';
import { ScrollArea } from '../../ui/scroll-area';
import Action from './components/Action';

export function DataTable() {
  const [total, setTotal] = useState<number>(0);
  const { fluidInputRecords, setFluidInputRecords } = useGlobalContext();

  useEffect(() => {
    const calcTotal = () => {
      let total = 0;
      fluidInputRecords.forEach((item) => {
        total += item.amount;
      });
      setTotal(total);
    };
    calcTotal();
  }, [fluidInputRecords]);

  // Fetch initial data
  const fetchAllRecords = async () => {
    const { data, error } = await getAllTables({ tableName: 'fluid_input' });

    if (error) {
      console.error('Error fetching records:', error);
    } else {
      setFluidInputRecords(data);
    }
  };

  // Update the view with real-time changes
  const subscribeToChanges = () => {
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
              setFluidInputRecords((prevRecords) => [
                ...prevRecords,
                payload.new,
              ]);

              break;
            case 'UPDATE':
              setFluidInputRecords((prevRecords) =>
                prevRecords.map((record) =>
                  record.id === payload.new.id ? payload.new : record
                )
              );
              break;
            case 'DELETE':
              setFluidInputRecords((prevRecords) =>
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
    // console.log('hello');
    fetchAllRecords();
    subscribeToChanges();
    // // // Clean up the subscription on unmount
    // return () => {
    //   supabase.removeAllChannels();
    // };
  }, []);

  return (
    <>
      <ContentHeader title='Fluid entries - input' subTitle='Editable' />
      <ScrollArea className='h-[200px] '>
        <div className='pb-5'>
          <Table>
            <TableCaption>Fluid input logs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Date / time</TableHead>
                <TableHead className='text-center'>Type</TableHead>
                <TableHead>Edited</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
                <TableHead className='text-right'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fluidInputRecords
                ?.sort((a, b) => {
                  const dateA = new Date(a.created_at);
                  const dateB = new Date(b.created_at);

                  // Compare the dates
                  // @ts-ignore
                  return dateB - dateA;
                })
                .map((data) => (
                  <TableRow key={data.id}>
                    <TableCell className='text-left'>
                      {format(data.created_at, 'dd MMM')}{' '}
                      {format(data.created_at, 'HH:mm')}
                    </TableCell>
                    <TableCell>{data.fluidType}</TableCell>
                    <TableCell>{data.edited.toString()}</TableCell>
                    <TableCell className='text-right'>{data.amount}</TableCell>
                    <TableCell>
                      <Action item={data} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow className=' bg-blue-200'>
                <TableCell colSpan={4} className='text-left'>
                  Total
                </TableCell>
                <TableCell className='text-right'>{total}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </ScrollArea>
      <Modal modalType='edit' />
      <DeleteWarning modalType='delete' />
    </>
  );
}
