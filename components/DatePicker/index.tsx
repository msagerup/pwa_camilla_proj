'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Button } from '../ui/button';

export function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  console.log(date);

  return (
    <div>
      <p className='text-muted-foreground text-sm pb-1'>
        Select a day to view data
      </p>

      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border shadow'
      />

      <Button className='mt-2'>View data for {format(date!, 'dd MMMM')}</Button>
    </div>
  );
}
