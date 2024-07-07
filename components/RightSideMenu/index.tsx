import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import SectionHeaderSelector from './components/SectionHeaderSelector';
import SectionSelector from './components/SectionSelector';
import { MenuToggler } from './components/menuToggler';

export function RightSideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open</Button>
      </SheetTrigger>
      <SheetContent className='p-0'>
        {' '}
        <div className=' fixed '>
          <div className=' w-[280px]'>
            <div className='animate-slide-in-right'>
              <div className='bg-gray-200 w-full h-[48px] pt-2 pl-5'>
                <MenuToggler />
              </div>
            </div>
          </div>
        </div>
        <SheetHeader className='text-left bg-black/20 py-5 pl-5'>
          <SectionHeaderSelector />
        </SheetHeader>
        <SectionSelector />
      </SheetContent>
    </Sheet>
  );
}
