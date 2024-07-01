'use server';

import { FluidRecord } from '@/utils/types';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function editFluidInput({ formData }: { formData: FluidRecord }) {
  try {
    const { data, error } = await supabase
      .from('fluid_input')
      .update({ amount: formData.amount, edited: true })
      .eq('id', formData.id)
      .select();

    if (data) {
      return {
        status: 200,
        message: 'Input changed',
      };
    }

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error: any) {
    console.log(error);
    return {
      status: 500,
      message: 'obs :( Something went wrong, try again later.',
      errorInfo: error.message,
    };
  }
}

export async function editFluidOutput({ formData }: { formData: FluidRecord }) {
  try {
    const { data, error } = await supabase
      .from('fluid_output')
      .update({ amount: formData.amount, edited: true })
      .eq('id', formData.id)
      .select();

    if (data) {
      return {
        status: 200,
        message: 'Input changed',
      };
    }

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error: any) {
    console.log(error);
    return {
      status: 500,
      message: 'obs :( Something went wrong, try again later.',
      errorInfo: error.message,
    };
  }
}
