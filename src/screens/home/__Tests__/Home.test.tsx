import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Home from '../Home';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

describe('Home', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const containerHome = getByTestId('container-home');
    const icon = getByTestId('cash-icon');

    expect(containerHome).toBeTruthy();
    expect(icon).toBeTruthy();
  });
});
