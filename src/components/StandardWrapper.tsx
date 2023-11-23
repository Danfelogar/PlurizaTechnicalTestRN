//dependencies
import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
//components
import {RootState, useAppSelector} from '../redux/store';

export default function StandardWrapper({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  //global state
  const {
    isDarkMode,
    colors: {background},
  } = useAppSelector((state: RootState) => state.colorPaletteSlice);
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={background}
        showHideTransition="slide"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
}
