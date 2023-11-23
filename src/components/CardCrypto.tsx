//dependencies
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//styles
import {stylesHome} from '../screens';
import {IBaseResJSON} from '../types/IBaseResJSON';
import {isNegativeNumber} from '../utils';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import {useNavigation} from '@react-navigation/native';
import {RootStackMainParams} from '../navigation/NavigationMain';
import {StackScreenProps} from '@react-navigation/stack';

type NavigationProp = StackScreenProps<RootStackMainParams, 'Details'>;

export default function CardCrypto({
  cryptoCurrency,
}: {
  cryptoCurrency: IBaseResJSON;
}): JSX.Element {
  //global state
  const {
    colors: {green, red},
  } = useSelector((state: RootState) => state.colorPaletteSlice);
  //custom styles
  const {
    cardWrapper,
    textName,
    textCode,
    textPrice,
    textStatus,
    imgWrapper,
    contentCardFirst,
    contentCardSecond,
  } = stylesHome();
  //logic
  const navigation = useNavigation<NavigationProp['navigation']>();

  const navigateDetails = (singleCryptoCurrency: IBaseResJSON) => {
    navigation.navigate('Details', {singleCryptoCurrency});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigateDetails(cryptoCurrency)}
      style={cardWrapper}>
      <Image style={imgWrapper} source={{uri: cryptoCurrency.image}} />
      <View style={contentCardFirst}>
        <Text numberOfLines={1} style={textName}>
          {cryptoCurrency.name}
        </Text>
        <Text style={textCode}>{cryptoCurrency.symbol}</Text>
      </View>
      <View style={contentCardSecond}>
        <Text
          style={{
            ...textStatus,
            color: isNegativeNumber(cryptoCurrency.price_change_24h)
              ? red
              : green,
          }}>
          {parseFloat(cryptoCurrency.price_change_24h.toFixed(2))}
          &nbsp;%
        </Text>
        <Text style={textPrice}>$ {cryptoCurrency.current_price}</Text>
      </View>
    </TouchableOpacity>
  );
}
