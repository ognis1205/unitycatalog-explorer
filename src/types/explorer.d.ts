/**
 * @fileoverview Defines Explorer data types.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import type { IconName } from '@/utils/icon';

export {};

declare global {
  interface ExplorerNode {
    name: string;
    iconName: IconName;
    isDirectory?: boolean;
  }
}
