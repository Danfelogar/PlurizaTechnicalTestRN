//dependencies
import {Dimensions} from 'react-native';

export const {width: widthFullScreen, height: heightFullScreen} =
  Dimensions.get('screen');

export const BASE_URL = `https://pluriza.s3.us-east-1.amazonaws.com`;

export function isNegativeNumber(numero: number): boolean {
  return Math.sign(numero) === -1;
}
