/**
 * @fileoverview Defines TreeviewNode molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { memo } from 'react';

import type { FC } from 'react';

export type Props = Record<string, never>;

export const Component: FC<Props> = memo((_props: Props) => <></>);

Component.displayName = 'TreeviewNode';
