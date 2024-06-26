'use client';

import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { useGlobalContext } from '../../context/store';

export default function BottomNav() {
  const router = useRouter();
  const pathName = usePathname();
  const { selectedBottomNav, setSelectedBottomNav } = useGlobalContext();

  const [value, setValue] = React.useState(0);
  console.log(pathName);
  console.log(selectedBottomNav);

  if (pathName.includes('/login')) return null;

  return (
    <>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0:
                setSelectedBottomNav('historical');
                window.history.pushState(
                  null,
                  '',
                  `${pathName}?isDrawerOpen=true&tab=historical`
                );
                break;
              case 1:
                setSelectedBottomNav('input');
                window.history.pushState(
                  null,
                  '',
                  `${pathName}?isDrawerOpen=true&tab=input`
                );
                break;
              case 2:
                setSelectedBottomNav('stats');
                window.history.pushState(
                  null,
                  '',
                  `${pathName}?isDrawerOpen=true&tab=stats`
                );
                break;
              default:
                break;
            }
          }}
        >
          <BottomNavigationAction label='Historical' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Input' icon={<AddIcon />} />
          <BottomNavigationAction label='Charts' icon={<BarChartIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
