/**
 * @fileoverview Defines client side context providers.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/chakra/theme';

import type { FC } from 'react';

export type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }: Props) => (
  <CacheProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </CacheProvider>
);

Providers.displayName = 'Providers';
