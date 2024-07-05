import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useGlobalContext } from '@/context/store';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { toast } from '../ui/use-toast';

export function TimeZonePickerCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTimeZone, timeZone } = useGlobalContext();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeZoneSelect = (timeValue: string) => {
    setTimeZone(timeValue);
    handleOpen();
    toast({
      title: 'Time zone change!',
      description: `Time zone changed to UTC ${timeValue}`,
    });
  };

  return (
    <HoverCard open={isOpen}>
      <HoverCardTrigger asChild>
        <div className='cursor-pointer text-sm ml-1' onClick={handleOpen}>
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div>
          <div className='space-y-1'>
            <h4 className='text-sm font-medium leading-none'>
              Application Time Zone
            </h4>
            <p className='text-sm text-muted-foreground'>
              Select your desired timezone for your entries
            </p>
          </div>
          <Separator className='my-4' />
          <div className='flex h-5 items-center space-x-2 text-sm'>
            <Button
              onClick={() => handleTimeZoneSelect('-0500')}
              className={timeZone === '-0500' ? 'bg-gray-200' : ''}
              size='sm'
              variant='ghost'
            >
              UTC -5
            </Button>
            <Separator orientation='vertical' />
            <Button
              className={timeZone === '-0400' ? 'bg-gray-200' : ''}
              onClick={() => handleTimeZoneSelect('-0400')}
              size='sm'
              variant='ghost'
            >
              UTC -4
            </Button>
            <Separator orientation='vertical' />
            <Button
              className={timeZone === '-0000' ? 'bg-gray-200' : ''}
              onClick={() => handleTimeZoneSelect('-0000')}
              size='sm'
              variant='ghost'
            >
              UTC
            </Button>
            <Separator orientation='vertical' />
            <Button
              className={timeZone === '+0100' ? 'bg-gray-200' : ''}
              onClick={() => handleTimeZoneSelect('+0100')}
              size='sm'
              variant='ghost'
            >
              UTC +1
            </Button>
            {/* <div>UTC -4</div>
            <Separator orientation='vertical' />
            <div>UTC -5</div>
            <Separator orientation='vertical' />
            <div>UTC</div>
            <Separator orientation='vertical' />
            <div>UTC +1</div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
