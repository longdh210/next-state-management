import { PropsWithChildren } from 'react';
import {
  CounterContext,
  CounterStore,
  createCounterStore,
} from './counter.store';
import React from 'react';

type Props = Readonly<PropsWithChildren>;

export function CounterProvider({ children }: Props) {
  const store = React.useRef<CounterStore>(null);

  if (!store.current) {
    store.current = createCounterStore();
  }

  return (
    <CounterContext.Provider value={store.current}>
      {children}
    </CounterContext.Provider>
  );
}
