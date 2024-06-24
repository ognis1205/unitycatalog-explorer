/**
 * @fileoverview Defines @/components/molecules/Tab story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Tab } from '@/components/molecules/Tab';

import type { Props as TabItemProps } from '@/components/molecules/TabItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/item1',
    iconName: 'catalog',
    name: 'Item1',
  },
  {
    href: '/item2',
    iconName: 'schema',
    name: 'Item2',
  },
  {
    href: '/item3',
    iconName: 'table',
    name: 'Item3',
  },
  {
    href: '/item4',
    iconName: 'catalog',
    name: 'Item4',
  },
  {
    href: '/item5',
    iconName: 'schema',
    name: 'Item5',
  },
  {
    href: '/item6',
    iconName: 'table',
    name: 'Item6',
  },
  {
    href: '/item7',
    iconName: 'catalog',
    name: 'Item7',
  },
  {
    href: '/item8',
    iconName: 'schema',
    name: 'Item8',
  },
  {
    href: '/item9',
    iconName: 'table',
    name: 'Item9',
  },
] satisfies TabItemProps[];

export const Default: Story = {
  args: {
    path: '/item1',
    items,
  },
  render: (args) => (
    <Flex direction="row">
      <Tab {...args} />
    </Flex>
  ),
};

export const Paths: Story = {
  args: {
    path: '/item1',
    items: items.slice(0, 3),
  },
  render: (args) => (
    <Flex direction="column">
      <Tab {...args} path="/item1" />
      <Tab {...args} path="/item2" />
      <Tab {...args} path="/item3" />
    </Flex>
  ),
};

export default meta;
