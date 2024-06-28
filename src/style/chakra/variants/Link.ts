/**
 * @fileoverview Defines Chakra UI custom Link variants.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const none = defineStyle({
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
  },
});

const pale = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.600`,
    border: '1px',
    borderColor: 'transparent',
    borderRadius: '4px',
    textDecoration: 'none',
    _hover: {
      color: `${colorScheme}.800`,
      bg: `${colorScheme}.100`,
      textDecoration: 'none',
    },
  };
});

const frosted = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.700`,
    bg: 'transparent',
    border: '1px',
    borderColor: 'transparent',
    borderRadius: '4px',
    textDecoration: 'none',
    _hover: {
      color: `${colorScheme}.900`,
      bg: 'rgba(128, 128, 128, 0.1)',
      textDecoration: 'none',
    },
  };
});

export const config = defineStyleConfig({
  variants: {
    none,
    pale,
    frosted,
  },
});
