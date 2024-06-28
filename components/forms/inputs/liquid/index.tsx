'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { fluidInputForm } from '@/server/inputs/fuidInputAction';
import { usePathname } from 'next/navigation';

const FormSchema = z.object({
  fluid: z.string().min(1, {
    message: 'Enter at least 1 digit.',
  }),
});

export function LiquidForm() {
  const pathName = usePathname();

  const isOutPutPath = pathName.includes('output');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fluid: '',
    },
  });

  const handleCloseDrawer = () => {
    window.history.pushState(null, '', `${pathName}`);
  };
  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    // Sets values based on path, either fluid_input or fluid_output
    const result = await fluidInputForm({ formData, isOutPutPath });

    if (result?.status === 200) {
      const data = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'MTS',
        },
      });

      const result = await data.json();

      toast({
        title: 'Great! Fluid entry added.',
        description: result?.joke ?? '',
      });
    }

    handleCloseDrawer();

    if (result?.status === 500) {
      toast({
        variant: 'destructive',
        title: 'Obs! Something went wrong.',

        description: 'Entry did not save. Please try again',
      });
      return;
    }

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='fluid'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fluid amount</FormLabel>
              <FormControl>
                <div className='flex gap-2 items-end'>
                  <Input
                    className='max-w-[100px]'
                    placeholder='Amount'
                    type='number'
                    {...field}
                  />
                  <div className='text-xl text-muted-foreground font-extralight'>
                    ml
                  </div>
                </div>
              </FormControl>
              <FormDescription>Enter your fluid amount in ml.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
