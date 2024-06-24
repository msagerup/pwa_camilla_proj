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
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedBottomNav: Dispatch<SetStateAction<string>>;
}

const defaultState: ContextProps = {
  selectedBottomNav: '',
  isDrawerOpen: false,
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

  return (
    <GlobalContext.Provider
      value={{
        selectedBottomNav,
        isDrawerOpen,
        setDrawerOpen,
        setSelectedBottomNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
