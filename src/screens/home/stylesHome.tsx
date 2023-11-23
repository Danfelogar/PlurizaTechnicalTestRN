//dependencies
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
//types
import {heightFullScreen} from '../../utils';
import {RootState} from '../../redux/store';

export function stylesHome() {
  //global state
  const {
    colors: {background, textPrimary, textSecondary, card, red},
  } = useSelector((state: RootState) => state.colorPaletteSlice);
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 17,
      backgroundColor: background,
      paddingTop: 25,
    },
    mainTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: textPrimary,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: heightFullScreen * 0.1,
      marginBottom: 10,
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 16,
      backgroundColor: card,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    imgWrapper: {
      width: 62,
      height: 62,
      borderRadius: 50,
      objectFit: 'cover',
      marginRight: 10,
    },
    contentCardFirst: {
      flexDirection: 'column',
      flex: 1,
      height: '100%',
      gap: 7,
      justifyContent: 'center',
      paddingRight: 15,
    },
    contentCardSecond: {
      flexDirection: 'column',
      height: '100%',
      gap: 7,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    textName: {
      fontSize: 23,
      fontWeight: 'bold',
      color: textPrimary,
    },
    textCode: {
      fontSize: 17,
      fontWeight: 'normal',
      color: textSecondary,
    },
    textStatus: {
      fontSize: 17,
      fontWeight: '500',
    },
    textPrice: {
      fontSize: 17,
      fontWeight: 'bold',
      color: textPrimary,
    },
  });
}
