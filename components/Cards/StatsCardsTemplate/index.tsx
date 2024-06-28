import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface StatsCardTemplateProps {
  link: string;
  image: string;
  altImageText: string;
  buttonText: string;
  header: string;
  desc: string;
}

const StatsCardTemplate = ({
  link,
  image,
  altImageText,
  header,
  desc,
  buttonText,
}: StatsCardTemplateProps) => {
  return (
    <div className='relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
      <Image
        src={image}
        alt={altImageText}
        width={400}
        height={300}
        className={`object-cover w-full h-32`}
      />
      <div className='p-4 flex flex-col justify-between'>
        <h3 className='text-sm font-bold'>{header}</h3>
        <p className='text-sm text-muted-foreground pt-3'>{desc}</p>

        <Link href={link} prefetch={false}>
          <Button
            size='sm'
            className='mt-4 w-full'
            onClick={() => {
              console.log('hello');
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StatsCardTemplate;
