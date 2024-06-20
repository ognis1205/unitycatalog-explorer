/**
 * @fileoverview Defines PreloaderText atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { motion } from 'framer-motion';

import { svgMotionTitleDefs, svgMotionTitleTextDefs } from '@/utils/svg/logo';

import type { SVGMotionLogoProps, SVGMotionPathProps } from '@/utils/svg/logo';
import type { FC } from 'react';

export type Props = Omit<
  SVGMotionLogoProps,
  keyof Pick<SVGMotionLogoProps, 'xmlns' | 'viewBox' | 'fill' | 'role'>
> & {
  strokeWidth: SVGMotionPathProps['strokeWidth'];
  strokeDasharray: SVGMotionPathProps['strokeDasharray'];
};

export const Component: FC<Props> = ({
  initial,
  animate,
  transition,
  strokeWidth,
  strokeDasharray,
  ...props
}: Props) => (
  <motion.svg {...props} {...svgMotionTitleDefs}>
    {svgMotionTitleTextDefs.map((t, index) => (
      <motion.path
        {...t}
        key={index}
        initial={initial}
        animate={animate}
        transition={transition}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
      ></motion.path>
    ))}
  </motion.svg>
);

Component.displayName = 'PreloaderText';
