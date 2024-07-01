import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGlobalContext } from '@/context/store';
import { FluidRecord } from '@/utils/types';
import { MoreHorizontal } from 'lucide-react';

const Action = ({ item }: { item: FluidRecord }) => {
  const { setSelectedFluidRecord, setOpenDialogId } = useGlobalContext();

  const handleModalActions = ({
    item,
    type,
  }: {
    item: FluidRecord;
    type: string;
  }) => {
    if (type === 'edit') {
      setOpenDialogId({ action: 'edit', section: 'fluid output', open: true });
      setSelectedFluidRecord(item);
    }

    if (type === 'delete') {
      setOpenDialogId({
        action: 'delete',
        section: 'fluid output',
        open: true,
      });
      setSelectedFluidRecord(item);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className='bg-gray-200'
          onClick={() => handleModalActions({ item, type: 'edit' })}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className='bg-red-300 mt-2'
          onClick={() => handleModalActions({ item, type: 'delete' })}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
