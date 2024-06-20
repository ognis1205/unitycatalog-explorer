/**
 * @fileoverview Defines Flex atom (re-exportation for backward compatibility.).
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Flex, chakra } from '@chakra-ui/react';

import type { FlexProps } from '@chakra-ui/react';

export type Props = FlexProps;

export const Component = chakra(Flex, {
  // Placeholder.
});

Component.displayName = 'Flex';
