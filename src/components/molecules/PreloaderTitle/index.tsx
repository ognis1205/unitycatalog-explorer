/**
 * @fileoverview Defines PreloaderTitle molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { motion } from 'framer-motion';

import { svgMotionDefs, svgMotionTextDefs } from '@/utils/svg/title';

import type { SVGMotionPathProps, SVGMotionSVGProps } from '@/utils/svg';
import type { FC } from 'react';

export type Props = Omit<
  SVGMotionSVGProps,
  keyof Pick<SVGMotionSVGProps, 'xmlns' | 'viewBox' | 'fill' | 'role'>
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
  <motion.svg {...props} {...svgMotionDefs}>
    {svgMotionTextDefs.map((t, index) => (
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

Component.displayName = 'PreloaderTitle';
