import { CounterState } from './counter.store';

export function selectCount(state: CounterState) {
  return state.count;
}

export function selectIncrease(state: CounterState) {
  return state.increase;
}

export function selectDecrease(state: CounterState) {
  return state.decrease;
}
