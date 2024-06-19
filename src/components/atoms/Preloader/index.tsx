/**
 * @fileoverview Defines Preloader atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { motion } from 'framer-motion';

import { defaultColorOf } from '@/utils/chakra/theme';

import type { FC, SVGAttributes } from 'react';

export type Props = Omit<
  SVGAttributes<SVGElement>,
  keyof Pick<SVGAttributes<SVGElement>, 'xmlns' | 'viewBox' | 'fill' | 'role'>
> & {
  progress: number;
};

export const Component: FC<Props> = ({ progress, props }: Props) => (
  <motion.svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 73"
    fill="none"
    role="presentation"
  >
    <motion.path
      d="M 35.34 24.416 L 24.79 30.506 V 42.686 L 35.34 48.776 L 45.88 42.686 V 30.506 L 35.34 24.416 Z"
      fill={defaultColorOf('UnityDarkBlue')}
      stroke={defaultColorOf('UnityDarkBlue')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 57.5698 23.756 H 69.6998 L 63.6398 13.256 L 57.5698 23.756 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 57.5698 49.426 L 63.6398 59.936 L 69.6998 49.426 H 57.5698 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 29.27 72.776 H 41.4 L 35.34 62.266 L 29.27 72.776 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 0.970215 49.426 L 7.04021 59.936 L 13.1102 49.426 H 0.970215 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 0.970215 23.756 H 13.1102 L 7.04021 13.256 L 0.970215 23.756 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 29.27 0.416016 L 35.34 10.926 L 41.4 0.416016 H 29.27 Z"
      fill={defaultColorOf('UnityYellow')}
      stroke={defaultColorOf('UnityYellow')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 46.9145 2.46457 L 39.8745 14.6582 L 52.0681 21.6982 L 59.1081 9.50457 L 46.9145 2.46457 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 71.08 29.416 H 57 V 43.496 H 71.08 V 29.416 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 52.0662 51.4746 L 39.8726 58.5146 L 46.9126 70.7083 L 59.1062 63.6683 L 52.0662 51.4746 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 18.6084 51.4781 L 11.5684 63.6718 L 23.762 70.7118 L 30.802 58.5181 L 18.6084 51.4781 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 14.08 29.556 H 0 V 43.636 H 14.08 V 29.556 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
    <motion.path
      d="M 23.763 2.47074 L 11.5693 9.51074 L 18.6093 21.7044 L 30.803 14.6644 L 23.763 2.47074 Z"
      fill={defaultColorOf('UnityPink')}
      stroke={defaultColorOf('UnityPink')}
      animate={{
        fillOpacity: progress,
        pathLength: progress,
      }}
      transition={{ ease: 'easeInOut' }}
      strokeWidth={0.1}
      strokeDasharray="0 1"
    ></motion.path>
  </motion.svg>
);

Component.displayName = 'Preloader';
