//dependencies
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
//types
import {RootState} from '../../redux/store';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function stylesDetails() {
  //global state
  const {
    colors: {background, textPrimary, textSecondary, card, red, purple},
  } = useSelector((state: RootState) => state.colorPaletteSlice);
  return StyleSheet.create({
    genericWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    containerDetails: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 17,
      backgroundColor: background,
      paddingTop: 25,
    },
    wrapperHeader: {
      width: '100%',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
    },
    wrapperPartNum: {
      width: '100%',
      flexDirection: 'column',
      height: heightFullScreen * 0.38,
    },
    wrapperActionNumScreen: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 2,
      alignItems: 'center',
    },
    parentCardNum: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 17,
      gap: 3,
    },
    leftPartCard: {
      height: '100%',
      width: '17%',
      backgroundColor: card,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 22,
      borderBottomLeftRadius: 22,
    },
    wrapperChangeNumberCar: {
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      gap: 3,
    },
    rightPArtMiddleCard: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rightPartUpCard: {
      flexDirection: 'column',
      width: '100%',
      height: '49.5%',
      backgroundColor: card,
      borderTopRightRadius: 22,
      padding: 12,
      gap: 10,
    },
    rightPartDownCard: {
      width: '100%',
      height: '49.5%',
      backgroundColor: card,
      borderBottomRightRadius: 22,
      padding: 12,
      gap: 10,
    },
    mainTitle: {
      fontSize: 27,
      fontWeight: 'bold',
      color: textPrimary,
      marginBottom: 20,
      marginRight: widthFullScreen * 0.07,
      flexDirection: 'row',
      alignItems: 'center',
    },
    contentDisplay: {},
    contentPathNumber: {},
    subTitleText: {
      fontSize: 17,
      fontWeight: 'normal',
      color: textSecondary,
    },
    currentTitle: {
      fontSize: 19,
      fontWeight: 'bold',
      color: textPrimary,
    },
    textStatus: {
      fontSize: 17,
      fontWeight: '500',
    },
    btnAcc: {
      marginTop: 12,
      flexDirection: 'row',
      width: '100%',
      height: heightFullScreen * 0.07,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: purple,
      borderRadius: 18,
    },
    firstVariantBorder: {
      borderColor: 'rgba(160, 156, 171, 0.3)',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      flex: 1,
    },
    btnNumberSpace: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondVariantBorder: {
      borderColor: 'rgba(160, 156, 171, 0.3)',
      borderBottomWidth: 1,
      flex: 1,
    },
    thirdVariantBorder: {
      borderColor: 'rgba(160, 156, 171, 0.3)',
      borderRightWidth: 1,
      flex: 1,
    },
    pathNumberWrapper: {
      width: '100%',
      flexDirection: 'column',
      height: heightFullScreen * 0.52,
    },
    textNumberPath: {
      fontSize: 27,
      fontWeight: 'bold',
      color: textPrimary,
    },
  });
}
