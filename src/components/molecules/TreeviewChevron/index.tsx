/**
 * @fileoverview Defines TreeviewChevron molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { forwardRef, memo, useImperativeHandle, useState } from 'react';

import { Component as Icon } from '@/components/atoms/Icon';

import type { Props as IconProps } from '@/components/atoms/Icon';

export type Props = Omit<IconProps, keyof Pick<IconProps, 'iconName'>>;

export type Toggler = {
  toggle: () => void;
};

export const Component = memo(
  forwardRef<Toggler, Props>((props: Props, ref) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      toggle: () => {
        setOpen((prev) => !prev);
      },
    }));

    return <Icon {...props} iconName={isOpen ? 'open' : 'close'} />;
  }),
);

Component.displayName = 'TreeviewChevron';
