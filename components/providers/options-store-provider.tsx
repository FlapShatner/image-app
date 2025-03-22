'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  type OptionsStore,
  createOptionsStore,
  initOptionsStore,
} from '@/stores/optionsStore';

export type OptionsStoreApi = ReturnType<typeof createOptionsStore>;

export const OptionsStoreContext = createContext<OptionsStoreApi | undefined>(
  undefined
);

export interface OptionsStoreProviderProps {
  children: ReactNode;
}

export const OptionsStoreProvider = ({
  children,
}: OptionsStoreProviderProps) => {
  const storeRef = useRef<OptionsStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createOptionsStore(initOptionsStore());
  }

  return (
    <OptionsStoreContext.Provider value={storeRef.current}>
      {children}
    </OptionsStoreContext.Provider>
  );
};

export const useOptionsStore = <T,>(
  selector: (store: OptionsStore) => T
): T => {
  const optionsStoreContext = useContext(OptionsStoreContext);

  if (!optionsStoreContext) {
    throw new Error(`useOptionsStore must be used within OptionsStoreProvider`);
  }

  return useStore(optionsStoreContext, selector);
};
