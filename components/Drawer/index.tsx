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
import HistoricalCards from '../Cards/HistoricalCards';
import { DatePicker } from '../DatePicker';
import LiquidInput from '../inputs/components/liquid/input';
import LiquidOutput from '../inputs/components/liquid/output';

const getDrawerComp = ({
  pathName,
  tabName,
}: {
  pathName: string;
  tabName: string | null;
}) => {
  if (pathName === '/' && tabName === 'input') {
    return <LiquidInput />;
  }

  if (pathName === '/entry/output/liquid' && tabName === 'output') {
    return <LiquidOutput />;
  }

  if (pathName === '/' && tabName === 'input') {
    return <LiquidInput />;
  }

  if (tabName === 'stats') {
    return <HistoricalCards />;
  }

  if (tabName === 'historical') {
    return (
      <div className='flex justify-center '>
        <DatePicker />
      </div>
    );
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
        {tabName === 'input' || tabName?.includes('output') ? (
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
        {drawerComponent}
        <DrawerFooter>
          <Button
            onClick={() => {
              handleCloseDrawer();
            }}
          >
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomDrawer;
