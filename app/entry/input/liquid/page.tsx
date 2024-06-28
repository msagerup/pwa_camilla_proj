import LiquidInput from '@/components/inputs/components/liquid/input';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Input liquid',
  description: 'Page for liquid input',
};

export default function Page() {
  return <LiquidInput />;
}
