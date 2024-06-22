/**
 * @fileoverview Defines Chakra UI custom Link variants.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const main = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.700`,
    textDecoration: 'none',
    _hover: {
      color: `${colorScheme}.900`,
      textDecoration: 'none',
    },
  };
});

const menu = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.700`,
    textDecoration: 'none',
    _hover: {
      color: `${colorScheme}.900`,
      textDecoration: 'none',
    },
  };
});

export const config = defineStyleConfig({
  variants: {
    main,
    menu,
  },
});
