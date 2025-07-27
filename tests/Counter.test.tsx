import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';

test('increment button works', () => {
  render(
    <Provider store={store}>
      <button onClick={() => store.dispatch({ type: 'counter/increment' })}>Increment</button>
      <div>{store.getState().counter.value}</div>
    </Provider>
  );

  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/1/)).toBeInTheDocument();
});
