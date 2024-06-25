'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
const MobileNavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const router = useRouter();
  if (pathName.includes('/login')) return null;

  return (
    <header className='w-full bg-background border-b fixed top-0 '>
      <div className='flex items-center justify-between h-12 px-4 md:px-6'>
        <Link href='#' className='flex items-center gap-2' prefetch={false}>
          {/* <MountainIcon className="h-6 w-6" /> */}
          logo
          <span className='sr-only'>Fluid Restriction tracker</span>
        </Link>
        <div>h</div>
        {/* <div>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full">
        <nav className="flex flex-col gap-4 py-6 px-4 md:px-6">
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </div> */}
      </div>
      <div className='flex items-center pl-4 h-8 bg-gray-400'>
        <div>FRT</div>
        <div className='bg-black w-[2px] h-[70%] mx-2' />
        <div className='flex gap-5 w-full justify-end'>
          <Tabs>
            <TabsList className='rounded-none'>
              <TabsTrigger
                onClick={() => router.push('/', { scroll: false })}
                value='input'
              >
                Liquid input
              </TabsTrigger>
              <TabsTrigger value='output'>Liquid output</TabsTrigger>
              {/* <TabsTrigger value='charts'>Charts</TabsTrigger> */}
            </TabsList>
          </Tabs>
          {/* 
          <div className='text-gray-600'>Liquid input</div>
          <div className='text-gray-600'>Liquid output</div>
          <div className='text-gray-600'>Charts</div> */}
        </div>
      </div>

      {/* <div className='bg-black'>s</div> */}
    </header>
  );
};

export default MobileNavBar;
