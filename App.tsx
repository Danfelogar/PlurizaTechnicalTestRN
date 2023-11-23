//dependencies
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//components
import {NavigationMain} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationMain />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
