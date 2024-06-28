import OutPutStatistics from '@/components/charts/liquid/OutPutStatistics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Output statistics ',
  description: 'Statistics of fluid output',
};

export default function LiquidChartPage() {
  return <OutPutStatistics />;
}
