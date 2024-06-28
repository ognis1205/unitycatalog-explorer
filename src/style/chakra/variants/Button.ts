/**
 * @fileoverview Defines Chakra UI custom Button variants.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const ucSolid = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.600`,
    bg: `${colorScheme}.50`,
    border: '1px',
    borderColor: `${colorScheme}.100`,
    boxShadow:
      'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
    _hover: {
      color: `${colorScheme}.800`,
      bg: `${colorScheme}.100`,
    },
    _active: {
      color: `${colorScheme}.800`,
      bg: `${colorScheme}.200`,
      borderColor: `${colorScheme}.200`,
    },
  };
});

const ucGhost = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.700`,
    bg: 'transparent',
    _hover: {
      color: `${colorScheme}.900`,
      bg: 'rgba(128, 128, 128, 0.05)',
    },
    _active: {
      color: `${colorScheme}.900`,
      bg: 'rgba(128, 128, 128, 0.1)',
    },
  };
});

const ucRouter = defineStyle((props) => {
  const { colorScheme } = props;

  return {
    color: `${colorScheme}.600`,
    bg: `${colorScheme}.50`,
    border: '1px',
    borderColor: `${colorScheme}.100`,
    boxShadow:
      'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
    _hover: {
      color: `${colorScheme}.800`,
      bg: `${colorScheme}.100`,
    },
    _active: {
      color: `${colorScheme}.800`,
      bg: `${colorScheme}.200`,
      borderColor: `${colorScheme}.200`,
    },
  };
});

export const config = defineStyleConfig({
  defaultProps: {
    variant: 'ucSolid',
  },
  variants: {
    ucSolid,
    ucGhost,
    ucRouter,
  },
});
