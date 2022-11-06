import { Theme } from '@types';

const theme: Theme = {
  breakpoints: {
    xs: '375px',
    s: '640px',
    m: '768px',
    l: '1024px',
    xl: '1280px',
    xxl: '1450px'
  },
  colors: {
    primary: {
      default: '#fff',
      10: '#fefefe'
    },
    secondary: {
      default: '#fff'
    },
    tertiary: {
      default: '#fff'
    }
  },
  spacings: {
    xxs: '5px',
    xs: '10px',
    s: '15px',
    m: '30px',
    l: '44px',
    xl: '80px',
    xxl: '120px'
  }
};

export default theme;
