import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
//dependencies
import {IBaseResJSON} from '../../types/IBaseResJSON';
import {cryptoApi} from '../../services';

interface IStateCryptocurrency {
  isLoading: boolean;
  cryptocurrencyList: IBaseResJSON[];
  //singleCryptocurrency: IBaseResJSON | null;
  currencyConversionInUSD: number;
}

const initialState: IStateCryptocurrency = {
  isLoading: false,
  cryptocurrencyList: [],
  //singleCryptocurrency: null,
  currencyConversionInUSD: 0,
};

const cryptocurrencySlice = createSlice({
  name: 'cryptocurrency',
  initialState,
  reducers: {
    getCryptocurrency(state, action) {
      state.cryptocurrencyList = action.payload;
    },
    //getSingleCryptocurrency(state, action) {
    //state.singleCryptocurrency = action.payload;
    //},
    getCurrencyConversionInUSD(state, action) {
      state.currencyConversionInUSD = action.payload;
    },
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {getCryptocurrency, getCurrencyConversionInUSD, changeLoading} =
  cryptocurrencySlice.actions;

export const getCryptocurrencyList = createAsyncThunk(
  'currency/getCryptocurrencyList',
  async (_, {dispatch}) => {
    dispatch(changeLoading(true));
    try {
      const response = await cryptoApi.get('/response.json');

      dispatch(getCryptocurrency(response.data));
    } catch (error) {
      console.error(error);
      dispatch(getCryptocurrency([]));
    } finally {
      dispatch(changeLoading(false));
    }
  },
);

export default cryptocurrencySlice.reducer;
