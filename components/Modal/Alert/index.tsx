import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { useGlobalContext } from '@/context/store';
import {
  handleFluidInputDelete,
  handleFluidOutputDelete,
} from '@/server/deleteAction';

export function DeleteWarning({ modalType }: { modalType: string }) {
  const { openDialogId, setOpenDialogId, selectedFluidRecord } =
    useGlobalContext();

  const isDialogOpen =
    openDialogId.open && modalType === openDialogId.action ? true : false;

  const handleOnOpenChange = () => {
    console.log('running');
    setOpenDialogId({ action: '', section: '', open: false });
  };

  console.log(selectedFluidRecord);

  const handleDelete = async () => {
    if (selectedFluidRecord.fluidType === 'input') {
      const result = await handleFluidInputDelete({
        record: selectedFluidRecord,
      });

      if (result?.status === 200) {
        toast({
          title: result.message,
        });
        setOpenDialogId({ action: '', section: '', open: false });
      }

      if (result?.status === 500) {
        toast({
          variant: 'destructive',
          title: 'Obs! Something went wrong.',

          description: 'Sorry, entry would not delete. Please try again',
        });
      }
    }

    if (selectedFluidRecord.fluidType === 'output') {
      const result = await handleFluidOutputDelete({
        record: selectedFluidRecord,
      });

      if (result?.status === 200) {
        toast({
          title: result.message,
        });
        setOpenDialogId({ action: '', section: '', open: false });
      }

      if (result?.status === 500) {
        toast({
          variant: 'destructive',
          title: 'Obs! Something went wrong.',

          description: 'Sorry, entry would not delete. Please try again',
        });
      }
    }
  };

  const handleClose = () => {
    setOpenDialogId({ action: '', section: '', open: false });
  };

  console.log(modalType);
  console.log(openDialogId);

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={handleOnOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-left mb-1 underline underline-offset-1 text-destructive decoration-red-800 decoration-double'>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className='text-left text-xs tracking-wider'>
            This action cannot be undone. This will permanently delete your
            entry from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Separator />
        <div className='flex justify-between gap-2'>
          <Button onClick={handleClose} className='min-w-24' variant='ghost'>
            Cancel
          </Button>
          <Button
            className='min-w-24 bg-destructive hover:bg-red-700'
            onClick={handleDelete}
          >
            DELETE
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
