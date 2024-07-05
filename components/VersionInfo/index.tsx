import { CalendarIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useState } from 'react';

export function VersionInfoCard({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HoverCard open={isOpen}>
      <HoverCardTrigger asChild>
        <div className='cursor-pointer' onClick={handleOpen}>
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar className='h-7 w-7'>
            <AvatarImage src='/images/top_logo.png' />
            <AvatarFallback></AvatarFallback>
          </Avatar>

          <div className='flex flex-col gap-5'>
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@FRT</h4>
              <p className='text-sm'>
                v.0.3 - Real time change on data. - First testing in progress.
              </p>
              <div className='flex items-center pt-2'>
                <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
                <span className='text-xs text-muted-foreground'>
                  Wed 05 July - 2024
                </span>
              </div>
            </div>
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@FRT</h4>
              <p className='text-sm'>
                v.0.2 - Edit, delete implemented. Graph render implemented.
              </p>
              <div className='flex items-center pt-2'>
                <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
                <span className='text-xs text-muted-foreground'>
                  Wed 01 July - 2024
                </span>
              </div>
            </div>
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@FRT</h4>
              <p className='text-sm'>
                v.0.1 - Login system implemented, Database connection added.
              </p>
              <div className='flex items-center pt-2'>
                <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
                <span className='text-xs text-muted-foreground'>
                  Wed 25 June - 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
