'use client';

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
    name: 'Page A',
    volume: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    volume: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    volume: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    volume: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    volume: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    volume: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default class ComposedChartData extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
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
          <XAxis dataKey='name' scale='band' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='volume' barSize={15} fill='#413ea0' />
          <Line type='monotone' dataKey='volume' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
