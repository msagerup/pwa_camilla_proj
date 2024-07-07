import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useGlobalContext } from '@/context/store';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import SourceIcon from '@mui/icons-material/Source';

export function MenuToggler() {
  const { setRightMenuSection } = useGlobalContext();

  const handleRightMenuSections = (value: string) => {
    setRightMenuSection(value);
  };

  return (
    <ToggleGroup type='single' size='lg' className='flex justify-between'>
      <div className='animate-slide-in-right-icon'>
        <ToggleGroupItem
          value='context'
          onClick={() => handleRightMenuSections('context')}
          aria-label='Toggle context'
        >
          <SourceIcon className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          value='account'
          onClick={() => handleRightMenuSections('account')}
          aria-label='Toggle account'
        >
          <Person2Icon className='h-4 w-4' />
        </ToggleGroupItem>
      </div>

      <ToggleGroupItem
        value='settings'
        onClick={() => handleRightMenuSections('settings')}
        aria-label='Toggle settings'
      >
        <SettingsIcon className='h-10 w-10 animate-slide-in-right-icon' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
