/**
 * @fileoverview Defines SVG logo properties.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */

import type { SVGMotionProps } from 'framer-motion';
import type { SVGAttributes } from 'react';

export type SVGSVGProps = SVGAttributes<SVGSVGElement>;

export type SVGPathProps = SVGAttributes<SVGPathElement>;

export type SVGMotionSVGProps = SVGMotionProps<SVGSVGElement>;

export type SVGMotionPathProps = SVGMotionProps<SVGPathElement>;
