/**
 * @fileoverview Defines ChakraUI theme.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { extendTheme } from '@chakra-ui/react';
import { Inter, Rubik } from 'next/font/google';

import { config as buttonConfig } from '@/style/chakra/variants/Button';
import { config as iconButtonConfig } from '@/style/chakra/variants/IconButton';
import { config as linkConfig } from '@/style/chakra/variants/Link';

const customComponents = {
  Button: buttonConfig,
  IconButton: iconButtonConfig,
  Link: linkConfig,
};

const customColors = {
  ucPink: {
    50: '#FEF4FF',
    100: '#FEE7FF',
    200: '#FCCEFF',
    300: '#FCA8FF',
    400: '#FC74FE',
    500: '#F43BF6',
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
    500: '#FFBC00',
    600: '#E29100',
    700: '#BB6602',
    800: '#984F08',
    900: '#7C400B',
    950: '#482100',
  },
  ucNavy: {
    50: '#DCEBF9',
    100: '#BEDAF4',
    200: '#78B2E8',
    300: '#378CDD',
    400: '#1C63A5',
    500: '#113C63',
    600: '#0D2F4E',
    700: '#0A253D',
    800: '#071727',
    900: '#040D16',
    950: '#010509',
  },
  ucDarkBlue: {
    50: '#D7E7F9',
    100: '#AFD0F3',
    200: '#60A1E7',
    300: '#1F72CC',
    400: '#13467C',
    500: '#071A2E',
    600: '#051423',
    700: '#040F1B',
    800: '#030A12',
    900: '#010509',
    950: '#010204',
  },
  jumbo: {
    50: '#F2F2F3',
    100: '#E7E7E9',
    200: '#CDCDD0',
    300: '#B5B6BA',
    400: '#9B9CA1',
    500: '#82838A',
    600: '#68686F',
    700: '#4F5054',
    800: '#343437',
    900: '#1B1B1D',
    950: '#0C0C0D',
  },
  friarGray: {
    50: '#F6F6F5',
    100: '#E7E7E6',
    200: '#D1D1D0',
    300: '#B1B1AF',
    400: '#898A86',
    500: '#7A7B77',
    600: '#5E5E5C',
    700: '#50504E',
    800: '#454644',
    900: '#3D3D3C',
    950: '#262725',
  },
  bianca: {
    50: '#FFFFFF',
    100: '#FDFDFC',
    200: '#FBFBF8',
    300: '#F8F9F5',
    400: '#F6F8F2',
    500: '#F4F6EF',
    600: '#C9D3B1',
    700: '#9FB073',
    800: '#6D7C46',
    900: '#363E23',
    950: '#1D2112',
  },
  ivory: {
    50: '#FFFFFE',
    100: '#FFFFFD',
    200: '#FFFFFC',
    300: '#FFFFFB',
    400: '#FFFFFA',
    500: '#FFFFF9',
    600: '#FFFFF7',
    700: '#FFFFF5',
    800: '#FFFFF3',
    900: '#FFFFF0',
    950: '#FFFFEF',
  },
  dodger: {
    50: '#EEF7FF',
    100: '#D9EDFF',
    200: '#BCE1FF',
    300: '#8ECEFF',
    400: '#59B2FF',
    500: '#459BFF',
    600: '#1B71F5',
    700: '#145BE1',
    800: '#1749B6',
    900: '#19418F',
    950: '#142957',
  },
};

export type CustomColor = keyof typeof customColors;

export const hexValueOf = (color: CustomColor) => customColors[color]['500'];

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
