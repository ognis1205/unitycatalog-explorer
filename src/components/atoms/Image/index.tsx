/**
 * @fileoverview Defines Image atom (re-exportation for backward compatibility.).
 * @see {@link https://github.com/chakra-ui/chakra-ui/discussions/3435|GitHub}
 * @see {@link https://v2.chakra-ui.com/docs/styled-system/chakra-factory|ChakraUI}
 * @see {@link https://zenn.dev/t_keshi/scraps/2322ed9224457a|Zenn(Japanese)}
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Image } from '@chakra-ui/react';

import type { ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

export type Props = Omit<ImageProps, keyof Pick<ImageProps, 'objectFit'>> & {
  alt: string;
};

export const Component: FC<Props> = ({ alt, ...props }: Props) => (
  <Image {...props} alt={alt} objectFit="contain" />
);

Component.displayName = 'Image';
