import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1441px',
};

const fonts = {
  xs: '0.75em',
  sm: '0.875em',
  md: '1em',
  lg: '1.125em',
  xl: '1.25em',
  '2xl': '1.5em',
  '3xl': '1.875em',
  '4xl': '2.25em',
  '5xl': '3em',
  '6xl': '3.75em',
  '7xl': '4.5em',
  '8xl': '6em',
  '9xl': '8em',
};

const colors = {
  brand: {
    dark: '#081426',
    green: '#64FFDA',
    white: '#CCD7F5',
    gray: '#8893AF',
    mint: '#06f1ff',
    blue: '#57CBFF',
    light: '#112240',
    pink: '#F57DFF',
    navy: '0A192F',
    lightNavy: '#112340',
    darkNavy: '#020c1b',
    navyShadow: 'rgba(2,12,27,0.7)',
  },
};


const styles = {
  global: {
    html: {
      fontSize: '62.5%',
      boxSizing: 'border-box',
    },
    button: {
      brand: {
        color: '#1A1A1A',
        background: 'yellow',
      },
    },
    body: {
      fontSize: '1.5rem',
      fontFamily: "'Karla', sans-serif;",
    },
    a: {
      color: '#1A1A1A',
    },
    '::placeholder': {
      color: '#BABABA',
    },
  },
};

const customTheme = extendTheme({
  colors, breakpoints, fonts, styles,
  components: {
    Tabs: {
      defaultProps: {
        colorScheme:"teal",
      }
    },
  },
});

export default customTheme;