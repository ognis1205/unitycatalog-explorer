/**
 * @fileoverview Defines ChakraUI theme.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { extendTheme } from '@chakra-ui/react';
import { Inter, Rubik } from 'next/font/google';

const customColors = {
  UnityPink: {
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
  UnityYellow: {
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
  UnityNavy: {
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
  UnityDarkBlue: {
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
};

export type ThemeColor = keyof typeof customColors;

export const defaultColorOf = (color: ThemeColor) => {
  switch (color) {
    case 'UnityPink':
      return customColors['UnityPink']['500'];
    case 'UnityYellow':
      return customColors['UnityYellow']['500'];
    case 'UnityNavy':
      return customColors['UnityNavy']['900'];
    case 'UnityDarkBlue':
      return customColors['UnityDarkBlue']['950'];
    default:
      return undefined;
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
  colors: customColors,
  fonts: customFonts,
});
