//dependencies
import React, {useEffect} from 'react';
import {FlatList, RefreshControl, Text} from 'react-native';
//components
import {RootState, useAppDispatch, useAppSelector} from '../redux/store';
import {getCryptocurrencyList} from '../redux/slices/cryptocurrency';
import CardCrypto from './CardCrypto';
import {View} from 'react-native';
import {Image} from 'react-native';
import {heightFullScreen, widthFullScreen} from '../utils';

export default function CryptoFlatList() {
  //global state
  const {isLoading, cryptocurrencyList} = useAppSelector(
    (state: RootState) => state.cryptocurrencySlice,
  );
  const {
    colors: {purple},
  } = useAppSelector((state: RootState) => state.colorPaletteSlice);
  const dispatch = useAppDispatch();
  //logic
  useEffect(() => {
    onTryAgain();
  }, []);

  const onTryAgain = () => {
    dispatch(getCryptocurrencyList());
  };

  return (
    <FlatList
      data={isLoading ? [] : cryptocurrencyList}
      refreshing={isLoading}
      onRefresh={onTryAgain}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onTryAgain}
          colors={[purple]}
          tintColor={purple}
        />
      }
      keyExtractor={item => item.id}
      renderItem={({item}) => <CardCrypto cryptoCurrency={item} />}
      ListFooterComponent={<View style={{marginBottom: 60}} />}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: widthFullScreen * 0.8,
              height: heightFullScreen * 0.45,
            }}
            source={require('../assets/notFoundList.png')}
          />
        </View>
      }
      showsVerticalScrollIndicator={false}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
    />
  );
}
