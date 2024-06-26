/**
 * @fileoverview Defines @/components/molecules/TreeviewNode story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewNode } from '@/components/molecules/TreeviewNode';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewNode',
  component: TreeviewNode,
} satisfies Meta<typeof TreeviewNode>;

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
      <TreeviewNode {...args} />
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
      <TreeviewNode {...args} />
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
      <TreeviewNode {...args} />
    </Flex>
  ),
};

export default meta;
