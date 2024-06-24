'use client';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Button } from '../ui/button';

import { getFullTitleNameAndDesc } from '@/utils/helpers';
import { usePathname, useSearchParams } from 'next/navigation';
import LiquidInput from '../inputs/components/liquid';

const getDrawerComp = ({
  pathName,
  tabName,
}: {
  pathName: string;
  tabName: string | null;
}) => {
  if (pathName === '/' && tabName === 'input') {
    console.log('heee');
    return <LiquidInput />;
  }
};

const BottomDrawer = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const tabName = searchParams.get('tab');
  let isDrawerOpen = searchParams.get('isDrawerOpen') === 'true' ?? false;

  const fullTitleName = getFullTitleNameAndDesc(tabName!);

  const drawerComponent = getDrawerComp({ pathName, tabName });

  const handleCloseDrawer = () => {
    window.history.pushState(null, '', `${pathName}`);
  };

  return (
    <Drawer open={isDrawerOpen} onClose={handleCloseDrawer}>
      <DrawerContent>
        {tabName === 'input' ? (
          <VisuallyHidden.Root>
            <DrawerHeader>
              <DrawerTitle>{fullTitleName?.title}</DrawerTitle>
              <DrawerDescription>{fullTitleName?.desc}</DrawerDescription>
            </DrawerHeader>
          </VisuallyHidden.Root>
        ) : (
          <DrawerHeader>
            <DrawerTitle>{fullTitleName?.title}</DrawerTitle>
            <DrawerDescription>{fullTitleName?.desc}</DrawerDescription>
          </DrawerHeader>
        )}

        <DrawerFooter>
          {drawerComponent}
          <Button
            onClick={() => {
              handleCloseDrawer();
            }}
          >
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomDrawer;
