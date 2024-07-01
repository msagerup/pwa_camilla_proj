'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RightSideMenu } from '../RightSideMenu';
import { VersionInfoCard } from '../VersionInfo';
import { Separator } from '../ui/separator';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import TimeDisplay from './components/TimeDisplay';
const MobileNavBar = () => {
  const pathName = usePathname();
  const router = useRouter();

  if (pathName.includes('/login')) return null;

  const isActive = pathName === '/';
  return (
    <header className='w-full bg-background border-b fixed top-0 '>
      <div className='flex items-center justify-between h-12 pr-4 pl-2 md:px-6'>
        <Link href='#' className='flex items-center gap-2' prefetch={false}>
          <Image src='/images/top_logo.png' height={40} width={40} alt='logo' />
          <span className='sr-only'>Fluid Restriction tracker</span>
          <div className='min-w-3'>
            <Separator />
          </div>
          <span className='text-gray-400 text-sm uppercase '>
            Fluid Restriction tracker
          </span>
        </Link>
        <div>
          <RightSideMenu />
        </div>
      </div>
      <div className='flex items-center pl-4 h-8 bg-gray-400'>
        <VersionInfoCard>
          <div className='flex gap-1'>
            <div>FRT</div>
            <div>v.0.2</div>
          </div>
        </VersionInfoCard>

        <div className='bg-black w-[2px] h-[70%] mx-2' />

        <TimeDisplay />

        <div className='flex gap-5 w-full justify-end'>
          <Tabs>
            <TabsList className='rounded-none gap-1'>
              <TabsTrigger
                onClick={() => router.push('/', { scroll: false })}
                value='input'
                className={
                  isActive
                    ? ' rounded-none h-8 uppercase text-xs bg-blue-400 text-white underline underline-offset-4'
                    : ' rounded-none h-8 uppercase text-xs'
                }
              >
                Fluid input
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  router.push('/entry/output/liquid', { scroll: false })
                }
                value='output'
                className={
                  !isActive
                    ? ' rounded-none h-8 uppercase text-xs bg-blue-400 text-white underline underline-offset-4 '
                    : ' rounded-none h-8 uppercase  text-xs'
                }
              >
                Fluid output
              </TabsTrigger>
              {/* <TabsTrigger value='charts'>Charts</TabsTrigger> */}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </header>
  );
};

export default MobileNavBar;
