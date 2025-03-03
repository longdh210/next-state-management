import React, { useContext } from 'react';
import { createStore, useStore } from 'zustand';

export type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const createCounterStore = () => {
  return createStore<CounterState>()((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  }));
};

export type CounterStore = ReturnType<typeof createCounterStore>;

export const CounterContext = React.createContext<CounterStore | null>(null);

export const useCounterContext = <T>(
  selector: (state: CounterState) => T
): T => {
  const store = useContext(CounterContext);

  if (!store) {
    throw new Error('Miss wrapping CounterContext.Provider');
  }

  return useStore(store, selector);
};
