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
      return (
        <>
          <SheetTitle className='text-md font-medium leading-none'>
            empty, for now..
          </SheetTitle>
          <SheetDescription>menu will come..</SheetDescription>
        </>
      );
  }
};

const SectionHeaderSelector = () => {
  const { rightMenuSection } = useGlobalContext();
  const menuSection = getMenuSection(rightMenuSection);

  return (
    <div>
      {menuSection}
      {/* <div className='container px-5 mx-auto'>
        <div className='space-y-1'>
          <h4 className='text-sm font-medium leading-none'>Fluid output</h4>
          <p className='text-sm text-muted-foreground'>
            Fluid output over time
          </p>
        </div>
        <Separator className='my-4 bg-gray-400' />
        <div className='flex h-5 items-center space-x-4 text-sm justify-center'>
          <Button>Blog</Button>
          <Separator orientation='vertical' className=' bg-gray-400' />
          <Button>Docs</Button>
          <Separator orientation='vertical' className=' bg-gray-400' />
          <Button>Source</Button>
        </div>
      </div> */}
    </div>
  );
};

export default SectionHeaderSelector;
