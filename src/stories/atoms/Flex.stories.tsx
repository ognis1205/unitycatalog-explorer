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

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Flex {...args}>
        <div>Default</div>
      </Flex>
    </Flex>
  ),
};

export const Directions: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Flex {...args} direction="row">
        <div>Row</div>
        <div>Row</div>
        <div>Row</div>
      </Flex>
      <Flex {...args} direction="column">
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
      </Flex>
    </Flex>
  ),
};

export default meta;
