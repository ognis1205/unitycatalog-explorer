/**
 * @fileoverview Defines Logo molucule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { defaultColorOf } from '@/utils/chakra/theme';
import {
  svgLogoDefs,
  svgLogoHexagonDefs,
  svgLogoSquareDefs,
  svgLogoTriangleDefs,
} from '@/utils/svg/logo';

import type { SVGLogoProps } from '@/utils/svg/logo';
import type { FC } from 'react';

export type Color = 'default' | 'black' | 'white';

export type Props = Omit<
  SVGLogoProps,
  keyof Pick<SVGLogoProps, 'xmlns' | 'viewBox' | 'fill' | 'role'>
> & {
  color?: Color;
};

export const Component: FC<Props> = ({
  color = 'default',
  ...props
}: Props) => {
  let hColor = defaultColorOf('UnityDarkBlue');
  let tColor = defaultColorOf('UnityYellow');
  let sColor = defaultColorOf('UnityPink');

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
    <svg {...props} {...svgLogoDefs}>
      {svgLogoHexagonDefs.map((h, index) => (
        <path {...h} key={index} fill={hColor}></path>
      ))}
      {svgLogoTriangleDefs.map((t, index) => (
        <path {...t} key={index} fill={tColor}></path>
      ))}
      {svgLogoSquareDefs.map((s, index) => (
        <path {...s} key={index} fill={sColor}></path>
      ))}
    </svg>
  );
};

Component.displayName = 'Logo';
