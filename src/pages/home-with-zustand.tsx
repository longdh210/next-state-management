import { Counter } from '../modules/test-zustand/pages/Counter';
import { CounterProvider } from '../modules/test-zustand/stores/CounverProvider';

export default function HomeWithZustand() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
