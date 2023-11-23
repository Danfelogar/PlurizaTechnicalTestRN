//dependencies
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//components
import {Details, Home} from '../screens';
import {useColorScheme} from 'react-native';
import {useAppDispatch} from '../redux/store';
import {changeTheme} from '../redux/slices/colorPalette';
import {IBaseResJSON} from '../types/IBaseResJSON';

const Stack = createStackNavigator<RootStackMainParams>();

export type RootStackMainParams = {
  Home: undefined;
  Details: {
    singleCryptoCurrency: IBaseResJSON;
  };
};

export default function NavigationMain() {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeTheme(isDarkMode));
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
