/**
 * @fileoverview Defines React Icon Utility.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { createElement } from 'react';
import {
  PiBookBold,
  PiDatabaseBold,
  PiHouseBold,
  PiInfoBold,
  PiPlusBold,
  PiQuestionBold,
  PiTableBold,
} from 'react-icons/pi';

const icons = {
  home: PiHouseBold,
  info: PiInfoBold,
  catalog: PiBookBold,
  schema: PiDatabaseBold,
  table: PiTableBold,
  plus: PiPlusBold,
  question: PiQuestionBold,
};

export type IconName = keyof typeof icons;

export const iconOf = (name: IconName) => createElement(icons[name]);

export const iconAs = (name: IconName) => icons[name];
