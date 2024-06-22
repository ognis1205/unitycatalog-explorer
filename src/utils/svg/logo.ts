/**
 * @fileoverview Defines SVG logo properties.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */

import { defaultColorOf } from '@/styles/chakra/theme';

import type { SVGMotionProps } from 'framer-motion';
import type { SVGAttributes } from 'react';

export type SVGLogoProps = SVGAttributes<SVGSVGElement>;

export type SVGPathProps = SVGAttributes<SVGPathElement>;

export type SVGMotionLogoProps = SVGMotionProps<SVGSVGElement>;

export type SVGMotionPathProps = SVGMotionProps<SVGPathElement>;

export const svgLogoDefs: SVGLogoProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 72 73',
  fill: 'none',
  role: 'presentation',
} as const;

export const svgLogoHexagonDefs: SVGPathProps[] = [
  {
    d: [
      'M 35.34 24.416',
      'L 24.79 30.506',
      'V 42.686',
      'L 35.34 48.776',
      'L 45.88 42.686',
      'V 30.506',
      'L 35.34 24.416',
      'Z',
    ].join(' '),
  } as const,
] as const;

export const svgLogoTriangleDefs: SVGPathProps[] = [
  {
    d: [
      'M 57.5698 23.756',
      'H 69.6998',
      'L 63.6398 13.256',
      'L 57.5698 23.756',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 57.5698 49.426',
      'L 63.6398 59.936',
      'L 69.6998 49.426',
      'H 57.5698',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 29.27 72.776',
      'H 41.4',
      'L 35.34 62.266',
      'L 29.27 72.776',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 0.970215 49.426',
      'L 7.04021 59.936',
      'L 13.1102 49.426',
      'H 0.970215',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 0.970215 23.756',
      'H 13.1102',
      'L 7.04021 13.256',
      'L 0.970215 23.756',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 29.27 0.416016',
      'L 35.34 10.926',
      'L 41.4 0.416016',
      'H 29.27',
      'Z',
    ].join(' '),
  } as const,
] as const;

export const svgLogoSquareDefs: SVGPathProps[] = [
  {
    d: [
      'M 46.9145 2.46457',
      'L 39.8745 14.6582',
      'L 52.0681 21.6982',
      'L 59.1081 9.50457',
      'L 46.9145 2.46457',
      'Z',
    ].join(' '),
  } as const,
  {
    d: ['M 71.08 29.416', 'H 57 V 43.496', 'H 71.08', 'V 29.416', 'Z'].join(
      ' ',
    ),
  } as const,
  {
    d: [
      'M 52.0662 51.4746',
      'L 39.8726 58.5146',
      'L 46.9126 70.7083',
      'L 59.1062 63.6683',
      'L 52.0662 51.4746',
      'Z',
    ].join(' '),
  } as const,
  {
    d: [
      'M 18.6084 51.4781',
      'L 11.5684 63.6718',
      'L 23.762 70.7118',
      'L 30.802 58.5181',
      'L 18.6084 51.4781',
      'Z',
    ].join(' '),
  } as const,
  {
    d: ['M 14.08 29.556', 'H 0', 'V 43.636', 'H 14.08', 'V 29.556', 'Z'].join(
      ' ',
    ),
  } as const,
  {
    d: [
      'M 23.763 2.47074',
      'L 11.5693 9.51074',
      'L 18.6093 21.7044',
      'L 30.803 14.6644',
      'L 23.763 2.47074',
      'Z',
    ].join(' '),
  } as const,
] as const;

export const svgMotionLogoDefs: SVGMotionLogoProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 72 73',
  fill: 'none',
  role: 'presentation',
} as const;

export const svgMotionLogoHexagonDefs: SVGMotionPathProps[] = [
  {
    d: [
      'M 35.34 24.416',
      'L 24.79 30.506',
      'V 42.686',
      'L 35.34 48.776',
      'L 45.88 42.686',
      'V 30.506',
      'L 35.34 24.416',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucDarkBlue'),
    stroke: defaultColorOf('ucDarkBlue'),
  } as const,
] as const;

export const svgMotionLogoTriangleDefs: SVGMotionPathProps[] = [
  {
    d: [
      'M 57.5698 23.756',
      'H 69.6998',
      'L 63.6398 13.256',
      'L 57.5698 23.756',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
  {
    d: [
      'M 57.5698 49.426',
      'L 63.6398 59.936',
      'L 69.6998 49.426',
      'H 57.5698',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
  {
    d: [
      'M 29.27 72.776',
      'H 41.4',
      'L 35.34 62.266',
      'L 29.27 72.776',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
  {
    d: [
      'M 0.970215 49.426',
      'L 7.04021 59.936',
      'L 13.1102 49.426',
      'H 0.970215',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
  {
    d: [
      'M 0.970215 23.756',
      'H 13.1102',
      'L 7.04021 13.256',
      'L 0.970215 23.756',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
  {
    d: [
      'M 29.27 0.416016',
      'L 35.34 10.926',
      'L 41.4 0.416016',
      'H 29.27',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucYellow'),
    stroke: defaultColorOf('ucYellow'),
  } as const,
] as const;

export const svgMotionLogoSquareDefs: SVGMotionPathProps[] = [
  {
    d: [
      'M 46.9145 2.46457',
      'L 39.8745 14.6582',
      'L 52.0681 21.6982',
      'L 59.1081 9.50457',
      'L 46.9145 2.46457',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
  {
    d: ['M 71.08 29.416', 'H 57 V 43.496', 'H 71.08', 'V 29.416', 'Z'].join(
      ' ',
    ),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
  {
    d: [
      'M 52.0662 51.4746',
      'L 39.8726 58.5146',
      'L 46.9126 70.7083',
      'L 59.1062 63.6683',
      'L 52.0662 51.4746',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
  {
    d: [
      'M 18.6084 51.4781',
      'L 11.5684 63.6718',
      'L 23.762 70.7118',
      'L 30.802 58.5181',
      'L 18.6084 51.4781',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
  {
    d: ['M 14.08 29.556', 'H 0', 'V 43.636', 'H 14.08', 'V 29.556', 'Z'].join(
      ' ',
    ),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
  {
    d: [
      'M 23.763 2.47074',
      'L 11.5693 9.51074',
      'L 18.6093 21.7044',
      'L 30.803 14.6644',
      'L 23.763 2.47074',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucPink'),
    stroke: defaultColorOf('ucPink'),
  } as const,
] as const;

export const svgMotionTitleDefs: SVGMotionLogoProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 120.114 72.001',
  role: 'presentation',
} as const;

export const svgMotionTitleTextDefs: SVGMotionPathProps[] = [
  {
    d: [
      'M 118 23.6',
      'L 116 23.6',
      'A 2.395 2.395 0 0 1 115.142 23.45',
      'A 2.206 2.206 0 0 1 114.6 23.15',
      'A 1.605 1.605 0 0 1 114.182 22.667',
      'Q 113.928 22.232 113.808 21.545',
      'A 5.624 5.624 0 0 1 113.8 21.5',
      'A 29.515 29.515 0 0 0 112.382 16.724',
      'Q 110.347 11.624 106.65 9.3',
      'A 20.482 20.482 0 0 0 100.302 6.727',
      'Q 97.154 6 93.4 6',
      'A 26.055 26.055 0 0 0 87.344 6.665',
      'A 17.806 17.806 0 0 0 78.95 11.15',
      'A 16.238 16.238 0 0 0 75.216 16.834',
      'Q 73.425 21.244 73.2 27.6',
      'Q 72.9 35.8 73.2 44.4',
      'Q 73.447 51.37 75.576 56',
      'A 15.816 15.816 0 0 0 78.95 60.85',
      'A 17.904 17.904 0 0 0 87.709 65.419',
      'A 26.391 26.391 0 0 0 93.4 66',
      'A 32.119 32.119 0 0 0 99.013 65.536',
      'Q 102.348 64.944 105.053 63.596',
      'A 18.513 18.513 0 0 0 106.65 62.7',
      'A 13.24 13.24 0 0 0 110.836 58.376',
      'Q 112.027 56.458 112.867 53.953',
      'A 31.636 31.636 0 0 0 113.8 50.5',
      'A 4.515 4.515 0 0 1 113.943 49.888',
      'Q 114.16 49.2 114.569 48.874',
      'A 1.349 1.349 0 0 1 114.6 48.85',
      'A 2.251 2.251 0 0 1 115.913 48.402',
      'A 2.787 2.787 0 0 1 116 48.4',
      'L 118 48.4',
      'A 2.459 2.459 0 0 1 118.91 48.565',
      'A 2.282 2.282 0 0 1 119.55 48.95',
      'Q 120.2 49.5 120.1 50.4',
      'A 21.337 21.337 0 0 1 119.124 55.624',
      'A 25.88 25.88 0 0 1 118.35 57.75',
      'A 21.375 21.375 0 0 1 115.125 63.094',
      'A 25.773 25.773 0 0 1 113.65 64.75',
      'A 20.862 20.862 0 0 1 109.124 68.247',
      'A 27.528 27.528 0 0 1 105.5 70',
      'A 26.15 26.15 0 0 1 100.351 71.436',
      'Q 97.867 71.877 95.022 71.973',
      'A 47.875 47.875 0 0 1 93.4 72',
      'A 38.337 38.337 0 0 1 87.292 71.542',
      'Q 82.234 70.725 78.55 68.45',
      'Q 72.8 64.9 70 58.8',
      'A 33.525 33.525 0 0 1 67.439 50.287',
      'A 42.737 42.737 0 0 1 66.9 44.9',
      'Q 66.8 40.8 66.8 36.1',
      'A 400.775 400.775 0 0 1 66.856 29.275',
      'A 350.459 350.459 0 0 1 66.9 27.1',
      'A 41.01 41.01 0 0 1 67.924 19.278',
      'A 32.955 32.955 0 0 1 70 13.15',
      'Q 72.8 7 78.55 3.5',
      'Q 83.454 0.516 90.793 0.076',
      'A 43.634 43.634 0 0 1 93.4 0',
      'A 42.098 42.098 0 0 1 98.822 0.33',
      'Q 101.604 0.692 103.969 1.451',
      'A 23.161 23.161 0 0 1 105.5 2',
      'A 26.723 26.723 0 0 1 109.91 4.231',
      'A 20.42 20.42 0 0 1 113.65 7.25',
      'A 23.83 23.83 0 0 1 116.929 11.452',
      'A 20.356 20.356 0 0 1 118.35 14.25',
      'A 24.147 24.147 0 0 1 119.738 18.765',
      'A 20.305 20.305 0 0 1 120.1 21.6',
      'Q 120.159 22.129 119.959 22.536',
      'A 1.588 1.588 0 0 1 119.55 23.05',
      'A 2.314 2.314 0 0 1 118.042 23.6',
      'A 2.918 2.918 0 0 1 118 23.6',
      'Z',
      'M 0 43.9',
      'L 0 3.3',
      'A 3.246 3.246 0 0 1 0.065 2.632',
      'Q 0.197 2.003 0.6 1.6',
      'A 2.008 2.008 0 0 1 1.697 1.043',
      'A 2.864 2.864 0 0 1 2.2 1',
      'L 4 1',
      'A 3.246 3.246 0 0 1 4.668 1.065',
      'Q 5.297 1.197 5.7 1.6',
      'A 1.953 1.953 0 0 1 6.2 2.486',
      'Q 6.3 2.851 6.3 3.3',
      'L 6.3 44.2',
      'A 37.872 37.872 0 0 0 6.751 50.256',
      'Q 7.838 56.953 11.55 60.7',
      'A 17.441 17.441 0 0 0 20.664 65.508',
      'A 25.497 25.497 0 0 0 25.8 66',
      'A 24.152 24.152 0 0 0 31.903 65.27',
      'A 17.202 17.202 0 0 0 39.95 60.7',
      'Q 45.2 55.4 45.2 44.2',
      'L 45.2 3.3',
      'A 2.98 2.98 0 0 1 45.276 2.607',
      'A 1.951 1.951 0 0 1 45.85 1.6',
      'A 2.24 2.24 0 0 1 47.134 1.022',
      'A 3.03 3.03 0 0 1 47.5 1',
      'L 49.3 1',
      'Q 50.3 1 50.9 1.6',
      'A 1.953 1.953 0 0 1 51.4 2.486',
      'Q 51.5 2.851 51.5 3.3',
      'L 51.5 43.9',
      'A 50.734 50.734 0 0 1 51.106 50.42',
      'Q 50.673 53.758 49.763 56.549',
      'A 24.722 24.722 0 0 1 48.45 59.8',
      'A 21.249 21.249 0 0 1 44.074 65.865',
      'A 19.361 19.361 0 0 1 39.7 69',
      'Q 34 72 25.8 72',
      'A 36.608 36.608 0 0 1 19.384 71.466',
      'Q 15.274 70.735 11.95 69',
      'A 20.065 20.065 0 0 1 3.498 60.563',
      'A 24.724 24.724 0 0 1 3.1 59.8',
      'A 26.731 26.731 0 0 1 0.984 53.72',
      'Q 0.338 50.863 0.116 47.527',
      'A 54.642 54.642 0 0 1 0 43.9',
      'Z',
    ].join(' '),
    fill: defaultColorOf('ucDarkBlue'),
    stroke: defaultColorOf('ucDarkBlue'),
    vectorEffect: 'non-scaling-stroke',
  } as const,
] as const;
