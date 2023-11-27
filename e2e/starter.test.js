import {device, element, by, waitFor} from 'detox';

describe('Testing End 2 end Todays Rates', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should select Dogecoin', async () => {
    //This line begins a test case named 'should select Dogecoin'. This test will check if the app can correctly select Dogecoin.
    const flatList = await element(by.id('flat-list-crypto'));
    //This line locates the element with the id 'flat-list-crypto' on the screen and assigns it to the variable 'flatList'.
    await flatList.scroll(240, 'down', 0.5, 0.5);

    await element(by.text('Dogecoin')).tap();
    //This line locates the element with the text 'Dogecoin' and taps on it.
    await expect(element(by.text('DOGE'))).toBeVisible();
  });
  it('should press the button', async () => {
    //This line begins another test case named 'should press the button'. This test will check if the app can correctly press the button.
    const btn1 = await element(by.id('btn-1'));
    const btn2 = await element(by.id('btn-2'));
    const btn3 = await element(by.id('btn-3'));
    //These lines locate the elements with the ids 'btn-1', 'btn-2', and 'btn-3' on the screen and assign them to the variables 'btn1', 'btn2', and 'btn3' respectively.
    await btn1.tap();
    await btn2.tap();
    await btn3.tap();
    //These lines tap on the elements 'btn1', 'btn2', and 'btn3' respectively.
    await expect(element(by.text('123'))).toBeVisible();
  });

  it('Dogecoin convert currency to USD', async () => {
    //This line begins another test case named 'Dogecoin convert currency to USD'. This test will check if the app can correctly convert Dogecoin to USD.
    await element(by.id('btn-convert-currency')).tap();
    //This line checks if the element with the text '$9.47' is visible on the screen.
    await expect(element(by.text('$9.47'))).toBeVisible();
    await device.reloadReactNative();
  });
});
