import LiquidPageOverview from '@/components/charts/liquid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Input charts overview',
  description: 'Page for liquid charts',
};

export default function LiquidChartPage() {
  return <LiquidPageOverview />;
}
