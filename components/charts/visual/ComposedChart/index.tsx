'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PureComponent } from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    date: '1',
    volume: 33,
    avr: 33,
    amt: 1400,
  },
  {
    date: '2',
    volume: 100,
    avr: 100,
    amt: 1506,
  },
  {
    date: '3',
    volume: 32,
    avr: 32,
    amt: 989,
  },
  {
    date: '4',
    volume: 22,
    avr: 22,
    amt: 1228,
  },
  {
    date: '5',
    volume: 12,
    avr: 12,
    amt: 1100,
  },
];

export default class ComposedChartData extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
      <div>
        <ResponsiveContainer width='100%' height={350}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='date' scale='auto' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='volume' barSize={15} fill='#94b2e5' />
            <Line type='monotone' dataKey='avr' stroke='#ff7300' />
          </ComposedChart>
        </ResponsiveContainer>
        <div className='container px-5 mx-auto'>
          <div className='space-y-1'>
            <h4 className='text-sm font-medium leading-none'>Fluid output</h4>
            <p className='text-sm text-muted-foreground'>
              Fluid output over time
            </p>
          </div>
          <Separator className='my-4 bg-gray-400' />
          <div className='flex h-5 items-center space-x-4 text-sm justify-center'>
            <Button>Blog</Button>
            <Separator orientation='vertical' className=' bg-gray-400' />
            <Button>Docs</Button>
            <Separator orientation='vertical' className=' bg-gray-400' />
            <Button>Source</Button>
          </div>
        </div>
      </div>
    );
  }
}
