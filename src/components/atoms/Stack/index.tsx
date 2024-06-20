/**
 * @fileoverview Defines Stack atom (re-exportation for backward compatibility.).
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { chakra, Stack } from '@chakra-ui/react';

import type { StackProps } from '@chakra-ui/react';

export type Props = StackProps;

export const Component = chakra(Stack, {
  // Placeholder.
});

Component.displayName = 'Stack';
