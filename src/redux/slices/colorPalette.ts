//dependencies
import {createSlice} from '@reduxjs/toolkit';
//types
import {IColors} from '../../types/IColors';

interface IStateColorPalette {
  isDarkMode: boolean;
  colors: IColors;
}

const darkColors = {
  card: '#1a1940',
  background: '#0f0f31',
  purple: '#4516B3',
  red: '#CB314E',
  blackPick: '#A23E9F',
  green: '#4fa043',
  textPrimary: '#FFFF',
  textSecondary: '#A09CA7',
};

const lightColors = {
  card: '#E8D8FB',
  background: '#FFFF',
  purple: '#4516B3',
  red: '#CB314E',
  blackPick: '#A23E9F',
  green: '#4fa043',
  textPrimary: '#4A4E63',
  textSecondary: '#A09CA7',
};

const initialState: IStateColorPalette = {
  isDarkMode: false,
  colors: lightColors,
};

const colorPaletteSlice = createSlice({
  name: 'colorPalette',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.isDarkMode = action.payload;
      state.colors = action.payload ? darkColors : lightColors;
    },
  },
});

export const {changeTheme} = colorPaletteSlice.actions;

export default colorPaletteSlice.reducer;
