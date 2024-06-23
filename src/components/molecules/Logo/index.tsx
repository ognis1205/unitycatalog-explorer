/**
 * @fileoverview Defines Logo molucule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { defaultColorOf } from '@/style/chakra/theme';
import {
  svgDefs,
  svgHexagonDefs,
  svgSquareDefs,
  svgTriangleDefs,
} from '@/utils/svg/logo';

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
  let hColor = defaultColorOf('ucDarkBlue');
  let tColor = defaultColorOf('ucYellow');
  let sColor = defaultColorOf('ucPink');

  switch (color) {
    case 'black':
      hColor = 'black';
      tColor = 'black';
      sColor = 'black';
      break;
    case 'white':
      hColor = 'white';
      tColor = 'white';
      sColor = 'white';
      break;
    default:
      break;
  }

  return (
    <svg {...props} {...svgDefs}>
      {svgHexagonDefs.map((h, index) => (
        <path {...h} key={index} fill={hColor}></path>
      ))}
      {svgTriangleDefs.map((t, index) => (
        <path {...t} key={index} fill={tColor}></path>
      ))}
      {svgSquareDefs.map((s, index) => (
        <path {...s} key={index} fill={sColor}></path>
      ))}
    </svg>
  );
};

Component.displayName = 'Logo';
