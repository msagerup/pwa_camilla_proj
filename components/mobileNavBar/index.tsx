'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { VersionInfoCard } from '../VersionInfo';
import { Separator } from '../ui/separator';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import TimeDisplay from './components/TimeDisplay';
const MobileNavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const router = useRouter();
  if (pathName.includes('/login')) return null;

  return (
    <header className='w-full bg-background border-b fixed top-0 '>
      <div className='flex items-center justify-between h-12 pr-4 pl-2 md:px-6'>
        <Link href='#' className='flex items-center gap-2' prefetch={false}>
          {/* <MountainIcon className="h-6 w-6" /> */}
          <Image src='/images/top_logo.png' height={40} width={40} alt='logo' />
          <span className='sr-only'>Fluid Restriction tracker</span>
          <div className='min-w-3'>
            <Separator />
          </div>
          <span className='text-gray-400 text-sm uppercase '>
            Fluid Restriction tracker
          </span>
        </Link>
        <div>=</div>
      </div>
      <div className='flex items-center pl-4 h-8 bg-gray-400'>
        <VersionInfoCard>
          <div className='flex gap-1'>
            <div>FRT</div>
            <div>v.0.1</div>
          </div>
        </VersionInfoCard>

        <div className='bg-black w-[2px] h-[70%] mx-2' />

        <TimeDisplay />

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
