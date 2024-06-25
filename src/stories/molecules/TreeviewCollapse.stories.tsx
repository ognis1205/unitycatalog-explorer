/**
 * @fileoverview Defines @/components/molecules/TreeviewCollapse story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewCollapse } from '@/components/molecules/TreeviewCollapse';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewCollapse',
  component: TreeviewCollapse,
} satisfies Meta<typeof TreeviewCollapse>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    w: '100',
    h: '100',
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewCollapse {...args} />
    </Flex>
  ),
};

export default meta;
