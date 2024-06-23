/**
 * @fileoverview Defines @/components/molecules/TabItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TabItem } from '@/components/molecules/TabItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TabItem',
  component: TabItem,
} satisfies Meta<typeof TabItem>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    iconName: 'catalog',
    name: 'Catalog',
  },
  render: (args) => (
    <Flex direction="row">
      <TabItem {...args} />
    </Flex>
  ),
};

export const Icons: Story = {
  args: {
    href: '/',
    iconName: 'home',
    name: '',
  },
  render: (args) => (
    <Flex direction="row">
      <TabItem {...args} iconName="home" name="Home" />
      <TabItem {...args} iconName="info" name="Info" />
      <TabItem {...args} iconName="catalog" name="Catalog" />
      <TabItem {...args} iconName="schema" name="Schema" />
      <TabItem {...args} iconName="table" name="Table" />
      <TabItem {...args} iconName="plus" name="Plus" />
      <TabItem {...args} iconName="question" name="Question" />
    </Flex>
  ),
};

export default meta;
