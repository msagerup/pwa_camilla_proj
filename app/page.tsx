import CircleBar from '@/components/circleBar';

export default function Home() {
  return (
    <div className='container px-5 mx-auto text-center text-2xl'>
      <div className='mt-10'>
        <h2> Camilla&apos;s Pee-tastic WhizWhiz Tracker 🚽 :)</h2>
      </div>
      <div className=''>
        <CircleBar />
      </div>
    </div>
  );
}
