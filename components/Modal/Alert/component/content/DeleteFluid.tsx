import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const DeleteFluid = () => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className='text-left mb-1 underline underline-offset-1 text-destructive decoration-red-800 decoration-double'>
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription className='text-left text-xs tracking-wider'>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
    </AlertDialogContent>
  );
};

export default DeleteFluid;
