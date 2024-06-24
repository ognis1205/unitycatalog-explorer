/**
 * @fileoverview Defines NavFeedback molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Link } from '@/components/atoms/Link';
import { Component as Text } from '@/components/atoms/Text';

import type { Props as TextProps } from '@/components/atoms/Text';
import type { FC } from 'react';

export type Props = Omit<TextProps, keyof Pick<TextProps, 'fontSize'>>;

export const Component: FC<Props> = ({ color, ...props }: Props) => (
  <Link
    href="https://github.com/ognis1205/unitycatalog-explorer/issues"
    isExternal
    variant="tab"
  >
    <HStack>
      <Icon color={color} iconName="github" boxSize="1.5rem" />
      <Text color={color} {...props} fontSize="1rem">
        Send feedback
      </Text>
    </HStack>
  </Link>
);

Component.displayName = 'NavFeedback';
