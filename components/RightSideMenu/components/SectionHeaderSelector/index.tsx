import { SheetDescription, SheetTitle } from '@/components/ui/sheet';
import { useGlobalContext } from '@/context/store';

const getMenuSection = (value: string) => {
  switch (value) {
    case 'context':
      return (
        <div>
          <SheetTitle className='text-md font-medium leading-none mb-1'>
            Site Navigation
          </SheetTitle>
          <SheetDescription>Overview over FRT pages</SheetDescription>
        </div>
      );
    case 'account':
      return (
        <>
          <SheetTitle className='text-md font-medium leading-none'>
            Profile
          </SheetTitle>
          <SheetDescription>Camilla M.T.</SheetDescription>
        </>
      );
    case 'settings':
      return (
        <>
          <SheetTitle className='text-md font-medium leading-none'>
            Settings
          </SheetTitle>
          <SheetDescription>F.R.T Settings</SheetDescription>
        </>
      );
    default:
      return null;
  }
};

const SectionHeaderSelector = () => {
  const { rightMenuSection } = useGlobalContext();
  const menuSection = getMenuSection(rightMenuSection);

  return <div>{menuSection}</div>;
};

export default SectionHeaderSelector;
