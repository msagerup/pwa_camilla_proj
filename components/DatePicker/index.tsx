'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { useGlobalContext } from '@/context/store';
import { format } from 'date-fns';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

export function DatePicker() {
  const pathName = usePathname();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { setActiveDate, activeDate } = useGlobalContext();

  const [selected, setSelected] = React.useState<Date>();

  React.useEffect(() => {
    if (selected) {
      const formatDate = selected.toISOString().split('T')[0];
      setActiveDate(formatDate);
    }
  }, [selected]);

  // TODO: FIX THIS TO CORRECT TIME

  return (
    <div>
      <p className='text-muted-foreground text-sm pb-1'>
        Select a day to view data
      </p>

      <Calendar
        mode='single'
        selected={selected}
        onSelect={setSelected}
        footer={
          selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : 'Pick a day.'
        }
      />

      <Button
        className='mt-2'
        onClick={() => {
          window.history.pushState(null, '', `${pathName}`);
        }}
      >
        View data for {format(date!, 'dd MMMM')}
      </Button>
    </div>
  );
}
