/**
 * @fileoverview Defines Illustration molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Image } from '@/components/atoms/Image';
import { Component as IllustrationBackground } from '@/components/molecules/IllustrationBackground';

import type { Props as ImageProps } from '@/components/atoms/Image';
import type { FC } from 'react';

export type Props = ImageProps;

export const Component: FC<Props> = ({ alt, ...props }: Props) => (
  <IllustrationBackground src="/images/wallpaper-wave.png">
    <Image alt={alt} {...props} />
  </IllustrationBackground>
);

Component.displayName = 'Illustration';
