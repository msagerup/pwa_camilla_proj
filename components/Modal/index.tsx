import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useGlobalContext } from '@/context/store';
import { Divider } from '@mui/material';
import { EditLiquidForm } from '../forms/edit/EditFluid';

const Modal = ({ modalType }: { modalType: string }) => {
  const { openDialogId, setOpenDialogId, selectedFluidRecord } =
    useGlobalContext();

  const isDialogOpen =
    openDialogId.open && modalType === openDialogId.action ? true : false;

  const handleOnOpenChange = () => {
    setOpenDialogId({ action: '', section: '', open: false });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOnOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-left mb-1 underline underline-offset-1 decoration-gray-500 decoration-double'>{`Edit fluid ${
            selectedFluidRecord.fluidType === 'input' ? 'input' : 'output'
          }`}</DialogTitle>
          <DialogDescription className='text-left text-xs tracking-wider'>
            You can edit this as many times as you want, date will be
            automatically updated.
          </DialogDescription>
          <Divider />
        </DialogHeader>
        <EditLiquidForm record={selectedFluidRecord} />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
