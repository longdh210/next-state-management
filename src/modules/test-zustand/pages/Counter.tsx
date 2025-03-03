import {
  selectCount,
  selectDecrease,
  selectIncrease,
} from '../stores/counter.selector';
import { useCounterContext } from '../stores/counter.store';

export function Counter() {
  const counter = useCounterContext(selectCount);
  const increase = useCounterContext(selectIncrease);
  const decrease = useCounterContext(selectDecrease);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
