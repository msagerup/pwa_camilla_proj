import ProteinInput from '@/components/inputs/components/protein';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protein input',
  description: 'Protein input',
};

export default function Page() {
  return <ProteinInput />;
}
 