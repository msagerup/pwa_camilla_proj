import LiquidOutput from '@/components/outputs/components/liquid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Output',
  description: 'Liquid output',
};

export default function Page() {
  return <LiquidOutput />;
}
