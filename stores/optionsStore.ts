import { createStore } from 'zustand/vanilla';

export type OptionsState = {
  borderWidth: number;
};

export type OptionsActions = {
  setBorderWidth: (borderWidth: number) => void;
};

export type OptionsStore = OptionsState & OptionsActions;

export const initOptionsStore = (): OptionsState => {
  return {
    borderWidth: 100,
  };
};

export const initialState: OptionsState = {
  borderWidth: 100,
};

export const createOptionsStore = (initState: OptionsState = initialState) => {
  return createStore<OptionsStore>((set) => ({
    ...initState,
    setBorderWidth: (borderWidth) => set({ borderWidth }),
  }));
};
