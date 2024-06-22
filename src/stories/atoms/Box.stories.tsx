/**
 * @fileoverview Defines @/components/atoms/Box story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Box',
  component: Box,
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box {...args}>Default</Box>
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {
    color: 'white',
    bg: 'black',
  },
  render: (args) => (
    <Flex direction="row">
      <Box {...args} boxSize="50">
        50
      </Box>
      <Box {...args} boxSize="100">
        100
      </Box>
      <Box {...args} boxSize="150">
        150
      </Box>
    </Flex>
  ),
};

export const Colors: Story = {
  args: {
    boxSize: 100,
    color: 'white',
  },
  render: (args) => (
    <Flex direction="row">
      <Box {...args} bg="ucPink.500">
        Pink
      </Box>
      <Box {...args} bg="ucYellow.500">
        Yellow
      </Box>
      <Box {...args} bg="ucDarkBlue.900">
        Navy
      </Box>
      <Box {...args} bg="ucDarkBlue.950">
        Dark Blue
      </Box>
    </Flex>
  ),
};

export default meta;
