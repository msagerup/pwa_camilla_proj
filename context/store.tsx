'use client';

import { FluidRecord, OpenDialogID } from '@/utils/types';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { boolean } from 'zod';

interface ContextProps {
  selectedBottomNav: string;
  isDrawerOpen: boolean;
  timeZone: string;
  dropDownInfoId: string;
  fluidInputRecords: FluidRecord[];
  fluidOutputRecords: FluidRecord[];
  openDialogId: OpenDialogID;
  selectedFluidRecord: FluidRecord;
  rightMenuSection: string;
  setRightMenuSection: Dispatch<SetStateAction<string>>;
  setSelectedFluidRecord: Dispatch<SetStateAction<FluidRecord>>;
  setOpenDialogId: Dispatch<SetStateAction<OpenDialogID>>;
  setFluidOutputRecords: Dispatch<SetStateAction<FluidRecord[]>>;
  setFluidInputRecords: Dispatch<SetStateAction<FluidRecord[]>>;
  setDropDownInfoID: Dispatch<SetStateAction<string>>;
  setTimeZone: Dispatch<SetStateAction<string>>;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedBottomNav: Dispatch<SetStateAction<string>>;
}

const defaultState: ContextProps = {
  selectedBottomNav: '',
  isDrawerOpen: false,
  timeZone: '-0400',
  dropDownInfoId: '',
  fluidInputRecords: [],
  fluidOutputRecords: [],
  openDialogId: {} as OpenDialogID,
  selectedFluidRecord: {} as FluidRecord,
  rightMenuSection: 'context',
  setRightMenuSection: () => null,
  setSelectedFluidRecord: () => {},
  setOpenDialogId: () => '',
  setFluidOutputRecords: () => [],
  setFluidInputRecords: () => [],
  setDropDownInfoID: () => typeof String,
  setTimeZone: () => typeof String,
  setDrawerOpen: () => typeof boolean,
  setSelectedBottomNav: () => typeof String,
};

const GlobalContext = createContext<ContextProps>(defaultState);

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedBottomNav, setSelectedBottomNav] = useState<string>('');
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [timeZone, setTimeZone] = useState<string>('-0400');
  const [dropDownInfoId, setDropDownInfoID] = useState<string>('');
  const [fluidOutputRecords, setFluidOutputRecords] = useState<FluidRecord[]>(
    []
  );
  const [fluidInputRecords, setFluidInputRecords] = useState<FluidRecord[]>([]);
  const [openDialogId, setOpenDialogId] = useState<OpenDialogID>(
    {} as OpenDialogID
  );
  const [selectedFluidRecord, setSelectedFluidRecord] = useState<FluidRecord>(
    {} as FluidRecord
  );

  const [rightMenuSection, setRightMenuSection] = useState<string>('context');

  return (
    <GlobalContext.Provider
      value={{
        selectedBottomNav,
        isDrawerOpen,
        timeZone,
        dropDownInfoId,
        fluidOutputRecords,
        fluidInputRecords,
        openDialogId,
        selectedFluidRecord,
        rightMenuSection,
        setRightMenuSection,
        setSelectedFluidRecord,
        setOpenDialogId,
        setFluidInputRecords,
        setFluidOutputRecords,
        setDropDownInfoID,
        setTimeZone,
        setDrawerOpen,
        setSelectedBottomNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
