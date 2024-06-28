/**
 * @fileoverview Defines BreadcrumbItem molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Link } from '@/components/atoms/Link';
import { Component as Text } from '@/components/atoms/Text';
import { defaultColorOf } from '@/style/chakra/theme';

import type { Props as TextProps } from '@/components/atoms/Text';
import type { FC } from 'react';

export type Props = TextProps & {
  href: string;
  name: string;
  isSentinel?: boolean;
};

export const Component: FC<Props> = ({
  href,
  name,
  isSentinel = false,
  ...props
}: Props) =>
  isSentinel ? (
    <Text {...props}>{name}</Text>
  ) : (
    <Link href={href} variant="route">
      <Text {...props} color={defaultColorOf('dodger')}>
        {name}
      </Text>
    </Link>
  );

Component.displayName = 'BreadcrumbItem';
