/**
 * @fileoverview Defines Icon atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { forwardRef, Icon } from '@chakra-ui/react';

import { iconAs } from '@/utils/icon';

import type { IconName } from '@/utils/icon';
import type { IconProps } from '@chakra-ui/react';

export type Props = IconProps & {
  iconName: IconName;
};

export const Component = forwardRef<Props, typeof Icon>(
  ({ iconName, ...props }, ref) => (
    <Icon ref={ref} {...props} as={iconAs(iconName)} />
  ),
);

Component.displayName = 'Icon';
