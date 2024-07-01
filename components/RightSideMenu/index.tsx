import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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
          <div className='animate-slide-in-right'>
            <div className='bg-gray-200 w-[300px] h-[48px] pt-2 pl-5'>
              <MenuToggler />
            </div>
          </div>
        </div>
        <SheetHeader className='text-left bg-black/20 py-5 pl-5'>
          <SheetTitle>empty, for now..</SheetTitle>
          <SheetDescription>menu will come..</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
