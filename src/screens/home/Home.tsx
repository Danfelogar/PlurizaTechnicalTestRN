//dependencies
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//styles
import {stylesHome} from './stylesHome';
//components
import {CryptoFlatList, StandardWrapper} from '../../components';
import {widthFullScreen} from '../../utils';
import {RootState, useAppSelector} from '../../redux/store';

export default function Home(): JSX.Element {
  //global state
  const {
    colors: {textPrimary},
  } = useAppSelector((state: RootState) => state.colorPaletteSlice);
  //custom styles
  const {containerHome, mainTitle} = stylesHome();
  return (
    <View testID="container-home" style={containerHome}>
      <StandardWrapper>
        <Text testID="xxx" style={mainTitle}>
          Today's Rates &nbsp;
          <Icon
            testID="cash-icon"
            name="cash"
            size={widthFullScreen * 0.08}
            color={textPrimary}
          />
        </Text>
        <CryptoFlatList />
      </StandardWrapper>
    </View>
  );
}
