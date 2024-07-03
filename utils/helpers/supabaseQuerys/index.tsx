import { FluidRecord } from '@/utils/types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllTables = async ({ tableName }: { tableName: string }) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('created_at', { ascending: false }); // S

  return { data: data as FluidRecord[], error };
};
