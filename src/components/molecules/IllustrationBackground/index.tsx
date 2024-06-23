/**
 * @fileoverview Defines IllustrationBackground molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as AbsoluteCenter } from '@/components/atoms/AbsoluteCenter';
import { Component as Box } from '@/components/atoms/Box';

import type { Props as BoxProps } from '@/components/atoms/Box';
import type { FC } from 'react';

export type Props = Omit<
  BoxProps,
  keyof Pick<
    BoxProps,
    | 'width'
    | 'w'
    | 'height'
    | 'h'
    | 'position'
    | 'backgroundImage'
    | 'bgImage'
    | 'backgroundSize'
    | 'bgSize'
    | 'backgroundRepeat'
    | 'bgRepeat'
  >
> & {
  src: string;
};

export const Component: FC<Props> = ({ src, children, ...props }: Props) => (
  <Box
    {...props}
    h="100%"
    w="100%"
    position="relative"
    bgImage={`url(${src})`}
    bgSize="100% 100%"
    bgRepeat="no-repeat"
  >
    <AbsoluteCenter>{children}</AbsoluteCenter>
  </Box>
);

Component.displayName = 'IllustrationBackground';
