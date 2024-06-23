/**
 * @fileoverview Defines Title molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { defaultColorOf } from '@/style/chakra/theme';
import { svgDefs, svgTextDefs } from '@/utils/svg/title';

import type { SVGSVGProps } from '@/utils/svg';
import type { FC } from 'react';

export type Color = 'default' | 'black' | 'white';

export type Props = Omit<
  SVGSVGProps,
  keyof Pick<SVGSVGProps, 'xmlns' | 'viewBox' | 'fill' | 'role'>
> & {
  color?: Color;
};

export const Component: FC<Props> = ({
  color = 'default',
  ...props
}: Props) => {
  let tColor = defaultColorOf('ucDarkBlue');

  switch (color) {
    case 'black':
      tColor = 'black';
      break;
    case 'white':
      tColor = 'white';
      break;
    default:
      break;
  }

  return (
    <svg {...props} {...svgDefs}>
      {svgTextDefs.map((t, index) => (
        <path {...t} key={index} fill={tColor}></path>
      ))}
    </svg>
  );
};

Component.displayName = 'Title';
