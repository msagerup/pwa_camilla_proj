import WeightAndProteinPageOverview from '@/components/charts/weightAndProtein';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Input weight and protein overview',
  description: 'Page for weight and protein charts',
};

export default function LiquidChartPage() {
  return <WeightAndProteinPageOverview />;
}
