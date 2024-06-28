'use server';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fluidInputForm({
  formData,
  isOutPutPath,
}: {
  formData: { fluid: string };
  isOutPutPath: boolean;
}) {
  try {
    const { data, error } = await supabase
      .from(isOutPutPath ? 'fluid_output' : 'fluid_input')
      .insert([{ amount: formData.fluid }])
      .select();

    console.log(data, error);

    if (data) {
      return {
        status: 200,
        message: 'Input added',
      };
    }
  } catch (error: any) {
    return {
      status: 500,
      message: 'obs :( Something went wrong, try again later.',
      errorInfo: error.message,
    };
  }
}
