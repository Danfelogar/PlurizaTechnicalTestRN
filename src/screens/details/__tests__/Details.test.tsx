import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Details from '../Details';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackMainParams} from '../../../navigation/NavigationMain';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

describe('Details', () => {
  const props: StackScreenProps<RootStackMainParams, 'Details'> = {
    navigation: {} as any,
    route: {
      key: 'Details',
      name: 'Details',
      params: {
        singleCryptoCurrency: {
          id: '',
          symbol: '',
          name: '',
          image: '',
          current_price: 0,
          market_cap: 0,
          market_cap_rank: 0,
          fully_diluted_valuation: 0,
          total_volume: 0,
          high_24h: 0,
          low_24h: 0,
          price_change_24h: 0,
          price_change_percentage_24h: 0,
          market_cap_change_24h: 0,
          market_cap_change_percentage_24h: 0,
          circulating_supply: 0,
          total_supply: 0,
          max_supply: 0,
          ath: 0,
          ath_change_percentage: 0,
          ath_date: new Date(),
          atl: 0,
          atl_change_percentage: 0,
          atl_date: new Date(),
          roi: null,
          last_updated: new Date(),
        },
      },
    },
  };
  test('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Details {...props} />
      </Provider>,
    );

    expect(getByText('Amount to convert')).toBeTruthy();

    // Check if the convert currency button is rendered
    expect(getByText('Convert currency')).toBeTruthy();
  });
});
