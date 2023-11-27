//dependencies
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import {RootStackMainParams} from '../../navigation/NavigationMain';
import {StandardWrapper} from '../../components';
import {stylesDetails} from './stylesDetails';
import {heightFullScreen, isNegativeNumber, widthFullScreen} from '../../utils';
import {RootState, useAppDispatch, useAppSelector} from '../../redux/store';
import useDetails from './useDetails';
import {getCurrencyConversionInUSD} from '../../redux/slices/cryptocurrency';

interface Props extends StackScreenProps<RootStackMainParams, 'Details'> {}

export default function Details({route, navigation}: Props): JSX.Element {
  //global state
  const {
    colors: {textPrimary, red, textSecondary, green},
  } = useAppSelector((state: RootState) => state.colorPaletteSlice);
  const {currencyConversionInUSD} = useAppSelector(
    (state: RootState) => state.cryptocurrencySlice,
  );
  //custom styles
  const {
    containerDetails,
    mainTitle,
    wrapperHeader,
    subTitleText,
    currentTitle,
    textStatus,
    leftPartCard,
    rightPartUpCard,
    rightPartDownCard,
    rightPArtMiddleCard,
    wrapperPartNum,
    parentCardNum,
    wrapperActionNumScreen,
    wrapperChangeNumberCar,
    btnAcc,
    firstVariantBorder,
    secondVariantBorder,
    thirdVariantBorder,
    genericWrapper,
    btnNumberSpace,
    pathNumberWrapper,
    textNumberPath,
  } = stylesDetails();
  //logic
  const dispatch = useAppDispatch();
  const {singleCryptoCurrency} = route.params;
  const {
    //state
    currentVal,
    //methods
    //functions
    handlePress,
    convertToUSD,
  } = useDetails();
  return (
    <View style={containerDetails}>
      <StandardWrapper>
        <View style={wrapperPartNum}>
          <View style={wrapperHeader}>
            <Icon
              onPress={() => {
                navigation.goBack();
                dispatch(getCurrencyConversionInUSD(0));
              }}
              name="left"
              size={widthFullScreen * 0.08}
              color={textPrimary}
            />
            <Text style={mainTitle}>{singleCryptoCurrency.name}</Text>
            <Text>&nbsp;</Text>
          </View>
          <View style={parentCardNum}>
            <View style={leftPartCard}>
              <FontAwesome6
                name="arrow-right-arrow-left"
                size={widthFullScreen * 0.07}
                color={red}
              />
            </View>
            <View style={wrapperChangeNumberCar}>
              <View style={rightPartUpCard}>
                <Text style={subTitleText}>Amount to convert</Text>
                <View style={rightPArtMiddleCard}>
                  <Text style={currentTitle}>{currencyConversionInUSD}</Text>
                  <View style={wrapperActionNumScreen}>
                    <Text style={{...subTitleText, color: textPrimary}}>
                      USD
                    </Text>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={widthFullScreen * 0.07}
                      color={textSecondary}
                    />
                  </View>
                </View>
              </View>

              <View style={rightPartDownCard}>
                <Text style={subTitleText}>
                  {singleCryptoCurrency.name} to receive
                </Text>
                <View style={rightPArtMiddleCard}>
                  <Text style={currentTitle}>
                    {currentVal.length > 15
                      ? currentVal.substring(0, 14) + '...'
                      : currentVal}
                  </Text>
                  <View style={wrapperActionNumScreen}>
                    <Text style={{...subTitleText, color: textPrimary}}>
                      {singleCryptoCurrency.symbol.toUpperCase()}
                    </Text>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={widthFullScreen * 0.07}
                      color={textSecondary}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      ...textStatus,
                      color: isNegativeNumber(
                        singleCryptoCurrency.price_change_24h,
                      )
                        ? red
                        : green,
                    }}>
                    {parseFloat(
                      singleCryptoCurrency.price_change_24h.toFixed(2),
                    )}
                    &nbsp;%
                  </Text>
                  <Text
                    style={{
                      ...textStatus,
                    }}>
                    Total supply:
                    {singleCryptoCurrency.total_supply.toString().length > 5
                      ? singleCryptoCurrency.total_supply
                          .toString()
                          .substring(0, 3) + '...'
                      : singleCryptoCurrency.total_supply.toString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={pathNumberWrapper}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={genericWrapper}>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  testID="btn-1"
                  onPress={() => handlePress('1')}>
                  <Text style={textNumberPath}>1</Text>
                </TouchableOpacity>
              </View>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  testID="btn-2"
                  onPress={() => handlePress('2')}>
                  <Text style={textNumberPath}>2</Text>
                </TouchableOpacity>
              </View>
              <View style={secondVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  testID="btn-3"
                  onPress={() => handlePress('3')}>
                  <Text style={textNumberPath}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={genericWrapper}>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('4')}>
                  <Text style={textNumberPath}>4</Text>
                </TouchableOpacity>
              </View>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('5')}>
                  <Text style={textNumberPath}>5</Text>
                </TouchableOpacity>
              </View>
              <View style={secondVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('6')}>
                  <Text style={textNumberPath}>6</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={genericWrapper}>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('7')}>
                  <Text style={textNumberPath}>7</Text>
                </TouchableOpacity>
              </View>
              <View style={firstVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('8')}>
                  <Text style={textNumberPath}>8</Text>
                </TouchableOpacity>
              </View>
              <View style={secondVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('9')}>
                  <Text style={textNumberPath}>9</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={genericWrapper}>
              <View style={thirdVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('.')}>
                  <Text style={textNumberPath}>.</Text>
                </TouchableOpacity>
              </View>
              <View style={thirdVariantBorder}>
                <TouchableOpacity
                  style={btnNumberSpace}
                  onPress={() => handlePress('0')}>
                  <Text style={textNumberPath}>0</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={btnNumberSpace}
                onPress={() => handlePress('Del')}>
                <MaterialCommunityIcons
                  name="chevron-left-box-outline"
                  size={widthFullScreen * 0.09}
                  color={textPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              convertToUSD(
                Number(currentVal),
                singleCryptoCurrency.current_price,
              );
            }}
            testID="btn-convert-currency"
            activeOpacity={0.8}
            style={btnAcc}>
            <Text
              style={{
                ...mainTitle,
                fontSize: 24,
                color: '#FFF',
                marginBottom: 0,
                marginRight: 0,
              }}>
              Convert currency
            </Text>
          </TouchableOpacity>
        </View>
      </StandardWrapper>
    </View>
  );
}
