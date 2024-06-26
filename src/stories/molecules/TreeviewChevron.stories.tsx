/**
 * @fileoverview Defines @/components/molecules/TreeviewChevron story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewChevron } from '@/components/molecules/TreeviewChevron';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewChevron',
  component: TreeviewChevron,
} satisfies Meta<typeof TreeviewChevron>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <TreeviewChevron {...args} />
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <TreeviewChevron {...args} boxSize="1em" />
      <TreeviewChevron {...args} boxSize="2em" />
      <TreeviewChevron {...args} boxSize="3em" />
    </Flex>
  ),
};

export default meta;
