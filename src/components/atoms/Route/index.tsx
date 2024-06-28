/**
 * @fileoverview Defines Route atom (re-exportation for backward compatibility).
 * @see {@link https://github.com/chakra-ui/chakra-ui/discussions/3435|GitHub}
 * @see {@link https://v2.chakra-ui.com/docs/styled-system/chakra-factory|ChakraUI}
 * @see {@link https://zenn.dev/t_keshi/scraps/2322ed9224457a|Zenn(Japanese)}
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import type { ButtonProps } from '@chakra-ui/react';
import type { FC } from 'react';

export type Props = Omit<
  ButtonProps,
  keyof Pick<ButtonProps, 'rounded' | 'variant'>
> & {
  href: string;
};

export const Component: FC<Props> = ({ children, href, ...props }: Props) => (
  <Button href={href} {...props} rounded="full" as={Link} variant="pale">
    {children}
  </Button>
);

Component.displayName = 'Route';
