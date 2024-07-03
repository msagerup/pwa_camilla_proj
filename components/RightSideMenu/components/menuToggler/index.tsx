import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
export function MenuToggler() {
  return (
    <ToggleGroup type='single' size='lg'>
      <ToggleGroupItem value='settings' aria-label='Toggle settings'>
        <SettingsIcon className='h-10 w-10 du' />
      </ToggleGroupItem>
      <ToggleGroupItem value='account' aria-label='Toggle account'>
        <AccountBoxIcon className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='close' aria-label='Toggle close'>
        <CloseIcon className='h-4 w-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
