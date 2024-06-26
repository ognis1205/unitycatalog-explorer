/**
 * @fileoverview Defines @/components/molecules/TreeviewItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewItem } from '@/components/molecules/TreeviewItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewItem',
  component: TreeviewItem,
} satisfies Meta<typeof TreeviewItem>;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  args: {
    asset: {
      name: 'catalog',
      iconName: 'catalog',
      isDirectory: true,
    },
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewItem {...args} />
    </Flex>
  ),
};

export const Schema: Story = {
  args: {
    asset: {
      name: 'schema',
      iconName: 'schema',
      isDirectory: true,
    },
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewItem {...args} />
    </Flex>
  ),
};

export const Table: Story = {
  args: {
    asset: {
      name: 'table',
      iconName: 'table',
      isDirectory: false,
    },
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewItem {...args} />
    </Flex>
  ),
};

export default meta;
