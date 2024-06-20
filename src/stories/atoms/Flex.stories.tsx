/**
 * @fileoverview Defines @/components/atoms/Flex story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: 'row',
  },
  render: (args) => (
    <Flex {...args}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </Flex>
  ),
};

export const Vertical: Story = {
  args: {
    direction: 'column',
  },
  render: (args) => (
    <Flex {...args}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </Flex>
  ),
};

export default meta;
