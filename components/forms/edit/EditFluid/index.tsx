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
import { useGlobalContext } from '@/context/store';
import {
  editFluidInput,
  editFluidOutput,
} from '@/server/editActions/EditInputAndOutput';
import { FluidRecord } from '@/utils/types';
import { Divider } from '@mui/material';
import { usePathname } from 'next/navigation';

const FormSchema = z.object({
  fluid: z.string().min(1, {
    message: 'Enter at least 1 digit.',
  }),
});

export function EditLiquidForm({ record }: { record: FluidRecord }) {
  const { selectedFluidRecord, setOpenDialogId } = useGlobalContext();

  console.log(selectedFluidRecord);

  const pathName = usePathname();

  const isOutPutPath = pathName.includes('output');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fluid: record.amount.toString(),
    },
  });

  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    // Sets values based on path, either fluid_input or fluid_output

    const newFomData = {
      ...record,
    };

    newFomData.amount = Number(formData.fluid);

    let result;
    if (newFomData.fluidType === 'input') {
      // Input edit
      result = await editFluidInput({ formData: newFomData });
    }

    if (newFomData.fluidType === 'output') {
      // output edit
      result = await editFluidOutput({ formData: newFomData });
    }

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
      setOpenDialogId({ action: '', section: '', open: false });
    }

    if (result?.status === 500) {
      toast({
        variant: 'destructive',
        title: 'Obs! Something went wrong.',

        description: 'Edit did not save. Please try again',
      });
      return;
    }
    form.reset();
  };

  const handleCancel = (e: any) => {
    form.reset();
    setOpenDialogId({ action: '', section: '', open: false });
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
        <div>
          <div className='mb-4'>
            <Divider />
          </div>
          <div className='flex justify-between'>
            <Button
              type='reset'
              variant='outline'
              onClick={(e) => handleCancel(e)}
            >
              Cancel
            </Button>
            <Button type='submit'>Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
