import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';
import ContentHeader from '../headers/contentHeader';
import { ScrollArea } from '../ui/scroll-area';
import Action from './components/Action';
const data = [
  {
    id: 1,
    date: Date.now(),
    type: 'liquid ',
    edited: 'false',
    amount: '20ml',
  },
  {
    id: 2,
    date: Date.now(),
    type: 'liquid',
    edited: 'false',
    amount: '10ml',
  },
  {
    id: 2,
    date: Date.now(),
    type: 'liquid input',
    edited: 'false',
    amount: '10ml',
  },
  {
    id: 2,
    date: Date.now(),
    type: 'liquid ',
    edited: 'false',
    amount: '10ml',
  },
  {
    id: 2,
    date: Date.now(),
    type: 'liquid',
    edited: 'false',
    amount: '10ml',
  },
];

export function DataTable() {
  // console.log(data);

  return (
    <>
      <ContentHeader title='Todays liquid entries' subTitle='Editable' />
      <ScrollArea className='h-[200px] '>
        <Table>
          <TableCaption>A list of liquid entries</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Date / time</TableHead>
              <TableHead className='text-center'>Type</TableHead>
              <TableHead>Edited</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
              <TableHead className='text-right'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.date}>
                <TableCell className='text-left'>
                  {format(data.date, 'dd:MMM')} {format(data.date, 'HH:mm')}
                </TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.edited}</TableCell>
                <TableCell className='text-right'>{data.amount}</TableCell>
                <TableCell>
                  <Action />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className=' bg-blue-200'>
              <TableCell colSpan={4} className='text-left'>
                Total
              </TableCell>
              <TableCell className='text-right'>30ml</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ScrollArea>
    </>
  );
}
