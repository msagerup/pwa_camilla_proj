'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { boolean } from 'zod';

interface ContextProps {
  selectedBottomNav: string;
  isDrawerOpen: boolean;
  timeZone: string;
  dropDownInfoId: string;
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

  return (
    <GlobalContext.Provider
      value={{
        selectedBottomNav,
        isDrawerOpen,
        timeZone,
        dropDownInfoId,
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
