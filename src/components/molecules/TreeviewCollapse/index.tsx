/**
 * @fileoverview Defines TreeviewCollapse molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { forwardRef, memo, useImperativeHandle, useState } from 'react';

import { Component as Box } from '@/components/atoms/Box';

import type { Props as BoxProps } from '@/components/atoms/Box';
import type { FC } from 'react';

export type Props = BoxProps;

export const Component: FC<Props> = memo(
  forwardRef(({ children, ...props }: Props, ref) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      toggle: () => {
        setOpen((prev) => !prev);
      },
    }));

    return (
      <Box {...props} display={isOpen ? 'block' : 'none'}>
        {children}
      </Box>
    );
  }),
);

Component.displayName = 'TreeviewCollapse';
