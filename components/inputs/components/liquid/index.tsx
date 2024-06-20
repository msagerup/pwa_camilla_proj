import { LiquidForm } from '@/components/forms/inputs/liquid';

const LiquidInput = () => {
  return (
    <div className='container px-5 mt-10'>
      <header className='text-2xl text-center'>Fluid input</header>
      <p className='max-w-xl mx-auto text-center text-sm leading-tight text-muted-foreground'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
        maxime adipisci id quidem fugit? Beatae voluptatibus possimus
        necessitatibus veniam accusantium, aut facere hic sint a blanditiis,
        dolorem amet natus dignissimos?
      </p>
      <div className='max-w-5xl mx-auto mt-10 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
        <LiquidForm />
      </div>
    </div>
  );
};

export default LiquidInput;
