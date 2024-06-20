/**
 * @fileoverview Defines Splash organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

//import { Heading, Text } from '@chakra-ui/react';

import { Component as Box } from '@/components/atoms/Box';
import { Component as PreloaderLogo } from '@/components/atoms/PreloaderLogo';
import { Component as Stack } from '@/components/atoms/Stack';

import type { Props as StackProps } from '@/components/atoms/Stack';
import type { FC } from 'react';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'align' | 'textAlign'>
>;

export const Component: FC<Props> = (props: Props) => (
  <Stack {...props} align="center" textAlign="center">
    <Box boxSize={200}>
      <PreloaderLogo
        initial={{
          fillOpacity: 0,
          pathLength: 0,
        }}
        animate={{
          fillOpacity: 1,
          pathLength: 1,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        strokeWidth={0.5}
        strokeDasharray="0 1"
      />
    </Box>
  </Stack>
);

Component.displayName = 'Splash';
