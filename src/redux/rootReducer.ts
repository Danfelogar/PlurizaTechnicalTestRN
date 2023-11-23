import {combineReducers} from '@reduxjs/toolkit';

import cryptocurrencySlice from './slices/cryptocurrency';
import colorPaletteSlice from './slices/colorPalette';

const rootReducer = combineReducers({
  cryptocurrencySlice,
  colorPaletteSlice,
});

export default rootReducer;
