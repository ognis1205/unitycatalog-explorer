/**
 * @fileoverview Defines @/components/atoms/Box story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Box',
  component: Box,
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof meta>;

export const Size100: Story = {
  args: {
    boxSize: '100',
    bg: 'UnityPink.500',
  },
  render: (args) => <Box {...args} />,
};

export const Size200: Story = {
  args: {
    boxSize: '200',
    bg: 'UnityYellow.500',
  },
  render: (args) => <Box {...args} />,
};

export const Size300: Story = {
  args: {
    boxSize: '300',
    bg: 'UnityDarkBlue.950',
  },
  render: (args) => <Box {...args} />,
};

export default meta;
