'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HistoricalCards = () => {
  return (
    <div className='  mx-auto'>
      <section className='grid grid-cols-2 gap-y-5 gap-x-2 pb-5'>
        <div className='relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
          <Link
            href='/charts/liquid'
            className='absolute inset-0 z-10'
            prefetch={false}
          >
            <span className='sr-only'>View</span>
          </Link>
          <Image
            src='/images/placeholder.svg'
            alt='Product 1'
            width={400}
            height={300}
            className='object-cover w-full h-20'
          />
          <div className='p-4 flex flex-col justify-between'>
            <h3 className='text-sm font-bold'>Liquid input/output</h3>
            <p className='text-sm text-muted-foreground pt-3'>
              Charts for liquid
            </p>

            <Link href='/charts/liquid' prefetch={false}>
              <Button
                size='sm'
                className='mt-4 w-full'
                onClick={() => {
                  console.log('hello');
                }}
              >
                View sss
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
          <Link
            href='/charts/weight_protein'
            className='absolute inset-0 z-10'
            prefetch={false}
          >
            <span className='sr-only'>View</span>
          </Link>
          <Image
            src='/images/placeholder.svg'
            alt='Product 2'
            width={400}
            height={300}
            className='object-cover w-full h-20'
          />
          <div className='p-4 flex flex-col justify-between'>
            <h3 className='text-sm font-bold'>Weight / protein</h3>
            <p className='text-sm text-muted-foreground pt-3'>
              Intake tracking
            </p>
            <Button size='sm' className='mt-4 w-full'>
              View
            </Button>
          </div>
        </div>
        {/* <div className='relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
        <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
          <span className='sr-only'>View</span>
        </Link>
        <Image
          src='/images/placeholder.svg'
          alt='Product 3'
          width={400}
          height={300}
          className='object-cover w-full h-20'
        />
        <div className='p-4 '>
          <h3 className='text-sm font-bold'>Cloud Hosting</h3>
          <p className='text-sm text-muted-foreground'>
            Reliable and scalable cloud hosting solutions.
          </p>
          <Button size='sm' className='mt-4 w-full'>
            View
          </Button>
        </div>
      </div> */}
        {/* <div className='relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
        <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
          <span className='sr-only'>View</span>
        </Link>
        <Image
          src='/images/placeholder.svg'
          alt='Product 4'
          width={400}
          height={300}
          className='object-cover w-full h-20'
        />
        <div className='p-4 '>
          <h3 className='text-sm font-bold'>Cloud Hosting</h3>
          <p className='text-sm text-muted-foreground'>
            Reliable and scalable cloud hosting solutions.
          </p>
          <Button size='sm' className='mt-4 w-full'>
            View
          </Button>
        </div>
      </div> */}
      </section>
    </div>
  );
};

export default HistoricalCards;
