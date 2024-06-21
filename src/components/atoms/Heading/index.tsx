/**
 * @fileoverview Defines Heading atom (re-exportation for backward compatibility.).
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Heading, chakra } from '@chakra-ui/react';

import type { HeadingProps } from '@chakra-ui/react';

export type Props = HeadingProps;

export const Component = chakra(Heading, {
  // Placeholder.
});

Component.displayName = 'Heading';
