import { FluidRecord } from '@/utils/types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllTables = async ({ tableName }: { tableName: string }) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('created_at', { ascending: false });

  return { data: data as FluidRecord[], error };
};

export const getTablesFromDate = async ({
  tableName,
  activeDate,
}: {
  tableName: string;
  activeDate: string;
}) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .gte('created_at', `${activeDate}T00:00:00.000Z`)
    .lt('created_at', `${activeDate}T23:59:59.999Z`)
    .order('created_at', { ascending: false });

  return { data: data as FluidRecord[], error };
};
