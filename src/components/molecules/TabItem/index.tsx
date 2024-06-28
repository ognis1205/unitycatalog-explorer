/**
 * @fileoverview Defines TabItem molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Link } from '@/components/atoms/Link';
import { Component as Text } from '@/components/atoms/Text';

import type { Props as IconProps } from '@/components/atoms/Icon';
import type { Props as StackProps } from '@/components/atoms/Stack';
import type { FC } from 'react';

export type Props = StackProps & {
  href: string;
  iconName: IconProps['iconName'];
  name: string;
};

export const Component: FC<Props> = ({
  href,
  iconName,
  name,
  ...props
}: Props) => (
  <Link href={href} variant="frosted">
    <HStack {...props}>
      <Icon iconName={iconName} />
      <Text>{name}</Text>
    </HStack>
  </Link>
);

Component.displayName = 'TabItem';
