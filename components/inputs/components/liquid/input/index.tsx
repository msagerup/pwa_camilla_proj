import { LiquidForm } from '@/components/forms/inputs/liquid';

const LiquidInput = () => {
  return (
    <div className='container px-5 mt-5'>
      <header className='text-2xl text-center'>Fluid input</header>
      <p className='max-w-xl mx-auto text-center text-sm text-muted-foreground'>
        Enter the amount in ml. Each entry will be logged. You can edit your
        entries at a later point.
      </p>
      <div className='max-w-5xl mx-auto mt-5 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
        <LiquidForm />
      </div>
    </div>
  );
};

export default LiquidInput;
