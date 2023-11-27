//dependencies
import {useState} from 'react';
//components
import {getCurrencyConversionInUSD} from '../../redux/slices/cryptocurrency';
import {useAppDispatch} from '../../redux/store';

export default function useDetails() {
  const dispatch = useAppDispatch();
  const [currentVal, setCurrentVal] = useState('0');

  const handlePress = (value: string) => {
    //delete
    if (value === 'Del') {
      if (currentVal !== '0') setCurrentVal(e => e.slice(0, -1));
      return;
    }

    // Check if the value is a dot and if there is already a dot in currentVal
    if (value === '.' && currentVal.includes('.')) {
      return;
    }

    // Check if the value is "0" and the next input is "0" before the decimal point
    if (currentVal === '0' && value === '0' && !currentVal.includes('.')) {
      return;
    }

    if (currentVal === '0' && value !== '0' && value !== '.') {
      return setCurrentVal(value);
    }

    // Update currentVal
    return setCurrentVal(currentVal + value);
  };

  function convertToUSD(currency: number, currencyInUSD: number) {
    const usd = currency * currencyInUSD;
    const valueConvery = usd.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    dispatch(getCurrencyConversionInUSD(valueConvery));
  }

  return {
    //state
    currentVal,
    //methods
    //functions
    handlePress,
    convertToUSD,
  };
}
