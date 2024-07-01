'use server';

import { FluidRecord } from '@/utils/types';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function handleFluidInputDelete({
  record,
}: {
  record: FluidRecord;
}) {
  try {
    const { error, data } = await supabase
      .from('fluid_input')
      .delete()
      .eq('id', record.id);

    if (data === null) {
      return { status: 200, message: 'OK, entry deleted.' };
    }

    if (error) {
      return {
        status: 500,
        message: 'Sorry, entry would not delete. Please try again later.',
      };
    }

    console.log(data, error);
  } catch (error: any) {
    console.log(error);
    return {
      status: 500,
      message: 'obs :( Something went wrong, try again later.',
      errorInfo: error.message,
    };
  }
}

export async function handleFluidOutputDelete({
  record,
}: {
  record: FluidRecord;
}) {
  try {
    const { error, data } = await supabase
      .from('fluid_output')
      .delete()
      .eq('id', record.id);

    if (data === null) {
      return { status: 200, message: 'OK, entry deleted.' };
    }

    if (error) {
      return {
        status: 500,
        message: 'Sorry, entry would not delete. Please try again later.',
      };
    }

    console.log(data, error);
  } catch (error: any) {
    console.log(error);
    return {
      status: 500,
      message: 'obs :( Something went wrong, try again later.',
      errorInfo: error.message,
    };
  }
}
