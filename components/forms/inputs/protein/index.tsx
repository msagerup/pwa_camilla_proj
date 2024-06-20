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

const formSchema = z.object({
  protein: z.number().min(2, {
    message: 'enter your amount in grams.',
  }),
});

export function ProteinForm() {
  // ...

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      protein: 0,
    },
  });

  const onSubmit = () => {
    console.log('pressed');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='protein'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Protein amount</FormLabel>
              <FormControl>
                <Input
                  placeholder='enter protein amount'
                  type='number'
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter your protein in grams</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
