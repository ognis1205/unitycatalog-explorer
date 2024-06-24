/**
 * @fileoverview Defines NavBody molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Box } from '@/components/atoms/Box';
import { Component as Heading } from '@/components/atoms/Heading';
import { Component as Stack } from '@/components/atoms/Stack';
import { Component as Text } from '@/components/atoms/Text';
import { Component as SVGLogo } from '@/components/molecules/SVGLogo';

import type { Props as StackProps } from '@/components/atoms/Stack';
import type { FC } from 'react';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'align' | 'textAlign'>
> & {
  title: string;
  message: string;
};

export const Component: FC<Props> = ({
  title,
  message,
  children,
  ...props
}: Props) => (
  <Stack align="center" textAlign="center" {...props}>
    <Box boxSize={150}>
      <SVGLogo />
    </Box>
    <Stack spacing={2}>
      <Heading size="lg">{title}</Heading>
      <Text fontSize="md">{message}</Text>
    </Stack>
    <Stack m={2} spacing={2}>
      {children}
    </Stack>
  </Stack>
);

Component.displayName = 'NavBody';
