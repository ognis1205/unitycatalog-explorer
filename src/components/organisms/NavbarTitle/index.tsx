/**
 * @fileoverview Defines NavbarTitle organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Image } from '@/components/atoms/Image';
import { Component as Link } from '@/components/atoms/Link';
import { Component as Text } from '@/components/atoms/Text';

import type { Props as TextProps } from '@/components/atoms/Text';
import type { FC } from 'react';

export type Props = Omit<TextProps, keyof Pick<TextProps, 'fontSize'>> & {
  home: string;
};

export const Component: FC<Props> = ({ home, ...props }: Props) => (
  <Link href={home} variant="none">
    <HStack>
      <Image src="/images/logo-color-dark-blue.svg" h="2rem" alt="Title" />
      <Text {...props} fontSize="1.75rem" as="b">
        Unity Catalog Explorer
      </Text>
    </HStack>
  </Link>
);

Component.displayName = 'NavbarTitle';
