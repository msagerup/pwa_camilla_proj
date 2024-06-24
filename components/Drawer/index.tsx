'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';

import { getFullTitleNameAndDesc } from '@/utils/helpers';
import { usePathname, useSearchParams } from 'next/navigation';
const BottomDrawer = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const tabName = searchParams.get('tab');
  let isDrawerOpen = searchParams.get('isDrawerOpen') === 'true' ?? false;

  const fullTitleName = getFullTitleNameAndDesc(tabName!);

  const handleCloseDrawer = () => {
    window.history.pushState(null, '', `${pathName}`);
  };

  return (
    <Drawer open={isDrawerOpen} onClose={handleCloseDrawer}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{fullTitleName?.title}</DrawerTitle>
          <DrawerDescription>{fullTitleName?.desc}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              handleCloseDrawer();
            }}
          >
            Submit
          </Button>

          {/* <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomDrawer;
