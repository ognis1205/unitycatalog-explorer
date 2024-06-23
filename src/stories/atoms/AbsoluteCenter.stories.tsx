/**
 * @fileoverview Defines @/components/atoms/AbsoluteCenter story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as AbsoluteCenter } from '@/components/atoms/AbsoluteCenter';
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'AbsoluteCenter',
  component: AbsoluteCenter,
} satisfies Meta<typeof AbsoluteCenter>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <AbsoluteCenter {...args}>Default</AbsoluteCenter>
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="50" position="relative">
        <AbsoluteCenter {...args}>50</AbsoluteCenter>
      </Box>
      <Box boxSize="100" position="relative">
        <AbsoluteCenter {...args}>100</AbsoluteCenter>
      </Box>
      <Box boxSize="150" position="relative">
        <AbsoluteCenter {...args}>150</AbsoluteCenter>
      </Box>
    </Flex>
  ),
};

export default meta;
