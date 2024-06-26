import { TimeZonePickerCard } from '@/components/TimeZonePicker';
import { useGlobalContext } from '@/context/store';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const TimeDisplay = () => {
  const { timeZone } = useGlobalContext();

  console.log(timeZone);

  return (
    <TimeZonePickerCard>
      {format(toZonedTime(new Date(), timeZone), 'HH:mm')}
    </TimeZonePickerCard>
  );
};

export default TimeDisplay;
