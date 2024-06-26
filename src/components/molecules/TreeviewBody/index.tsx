/**
 * @fileoverview Defines TreeviewBody molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Box } from '@/components/atoms/Box';
import { Component as TreeviewItem } from '@/components/molecules/TreeviewItem';

import type { Props as BoxProps } from '@/components/atoms/Box';
import type { FC } from 'react';

export type Props = BoxProps & {
  assets: AssetNode[];
};

export const Component: FC<Props> = ({ assets, ...props }: Props) => {
  return (
    <Box {...props}>
      {assets.map((asset, index) => (
        <TreeviewItem key={index} asset={asset} />
      ))}
    </Box>
  );
};

Component.displayName = 'TreeviewBody';
