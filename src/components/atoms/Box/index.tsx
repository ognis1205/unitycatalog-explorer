/**
 * @fileoverview Defines Box atom (re-exportation for backward compatibility.).
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Box, chakra } from '@chakra-ui/react';

import type { BoxProps } from '@chakra-ui/react';

export type Props = BoxProps;

export const Component = chakra(Box, {
  // Placeholder.
});

Component.displayName = 'Box';
