import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment, selectCount } from './counterSlice';

export function Counter() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);

  const increase = () => {
    dispatch(increment());
  };

  const decrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
