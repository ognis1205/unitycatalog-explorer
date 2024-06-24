/**
 * @fileoverview Defines PageTransitionArtwork molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as AbsoluteCenter } from '@/components/atoms/AbsoluteCenter';
import { Component as Box } from '@/components/atoms/Box';
import { Component as Image } from '@/components/atoms/Image';

import type { Props as ImageProps } from '@/components/atoms/Image';
import type { FC } from 'react';

export type Props = ImageProps;

export const Component: FC<Props> = ({ alt, ...props }: Props) => (
  <Box
    h="100%"
    w="100%"
    position="relative"
    bgImage={"url('/images/wallpaper-wave.png')"}
    bgSize="100% 100%"
    bgRepeat="no-repeat"
  >
    <AbsoluteCenter>
      <Image alt={alt} {...props} />
    </AbsoluteCenter>
  </Box>
);

Component.displayName = 'PageTransitionArtwork';
