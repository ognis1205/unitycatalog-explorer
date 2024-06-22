/**
 * @fileoverview Defines ChakraUI theme.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { extendTheme } from '@chakra-ui/react';
import { Inter, Rubik } from 'next/font/google';

import { style as buttonStyle } from '@/utils/chakra/styles/Button';

const customComponents = {
  Button: buttonStyle,
};

const customColors = {
  ucPink: {
    50: '#FEF4FF',
    100: '#FEE7FF',
    200: '#FCCEFF',
    300: '#FCA8FF',
    400: '#FC74FE',
    500: '#F43BF6', // default
    600: '#DA1FD8',
    700: '#B516B0',
    800: '#94148F',
    900: '#791673',
    950: '#51014B',
  },
  ucYellow: {
    50: '#FFFEEA',
    100: '#FFFAC5',
    200: '#FFF685',
    300: '#FFEB46',
    400: '#FFDC1B',
    500: '#FFBC00', // default
    600: '#E29100',
    700: '#BB6602',
    800: '#984F08',
    900: '#7C400B',
    950: '#482100',
  },
  ucNavy: {
    50: '#F1F8FE',
    100: '#E2EFFC',
    200: '#BEDFF9',
    300: '#85C4F4',
    400: '#44A7EC',
    500: '#1B8BDC',
    600: '#0E6DBB',
    700: '#0C5798',
    800: '#0F4B7D',
    900: '#113C63', // default
    950: '#0C2845',
  },
  ucDarkBlue: {
    50: '#F1F8FE',
    100: '#E1EFFD',
    200: '#BDDEFA',
    300: '#82C4F7',
    400: '#40A6F0',
    500: '#178BE0',
    600: '#0A6DBF',
    700: '#0A579A',
    800: '#0C4A80',
    900: '#103F6A',
    950: '#071A2E', // default
  },
  jumbo: {
    50: '#F5F5F6',
    100: '#E6E6E7',
    200: '#CFD0D2',
    300: '#ADAEB3',
    400: '#82838A', // default
    500: '#696A71',
    600: '#5A5B60',
    700: '#4C4C52',
    800: '#434347',
    900: '#3B3B3E',
    950: '#252627',
  },
  friarGray: {
    50: '#F6F6F5',
    100: '#E7E7E6',
    200: '#D1D1D0',
    300: '#B1B1AF',
    400: '#898A86',
    500: '#7A7B77', // default
    600: '#5E5E5C',
    700: '#50504E',
    800: '#454644',
    900: '#3D3D3C',
    950: '#262725',
  },
  bianca: {
    50: '#F4F6EF', // default
    100: '#E6EADB',
    200: '#CBD4B3',
    300: '#B0BD8C',
    400: '#A1AE71',
    500: '#9AA15F',
    600: '#8B8D52',
    700: '#767247',
    800: '#625D3E',
    900: '#524D35',
    950: '#2D2A1B',
  },
  ivory: {
    50: '#FFFFFE',
    100: '#FFFFFD',
    200: '#FFFFFC',
    300: '#FFFFFB',
    400: '#FFFFFA',
    500: '#FFFFF9', // default
    600: '#FFFFF7',
    700: '#FFFFF5',
    800: '#FFFFF3',
    900: '#FFFFF0',
    950: '#FFFFEF',
  },
};

export type ThemeColor = keyof typeof customColors;

export const defaultColorOf = (color: ThemeColor) => {
  switch (color) {
    case 'ucPink':
      return customColors['ucPink']['500'];
    case 'ucYellow':
      return customColors['ucYellow']['500'];
    case 'ucNavy':
      return customColors['ucNavy']['900'];
    case 'ucDarkBlue':
      return customColors['ucDarkBlue']['950'];
    case 'jumbo':
      return customColors['jumbo']['400'];
    case 'friarGray':
      return customColors['friarGray']['500'];
    case 'bianca':
      return customColors['bianca']['50'];
    case 'ivory':
      return customColors['ivory']['500'];
    default:
      return customColors[color]['500'];
  }
};

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fonts = {
  rubik,
  inter,
};

const customFonts = {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
};

export const theme = extendTheme({
  components: customComponents,
  colors: customColors,
  fonts: customFonts,
});
