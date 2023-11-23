//dependencies
import {StyleSheet} from 'react-native';
//types
import {IStylesCustom} from '../../types/IColors';
import {heightFullScreen} from '../../utils';

export function stylesHome(props: IStylesCustom) {
  const {background, textPrimary, textSecondary, card} = props;
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
      marginBottom: 10,
    },
    cardWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: heightFullScreen * 0.07,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: card,
    },
  });
}
