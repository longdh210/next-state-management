import { Provider } from 'react-redux';
import { store } from '../modules/test-redux/store';
import { Counter } from '../modules/test-redux/features/counter/Counter';

export default function HomeWithRedux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
