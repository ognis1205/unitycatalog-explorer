/**
 * @fileoverview Defines @/components/atoms/Stack story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Stack } from '@/components/atoms/Stack';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Stack',
  component: Stack,
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: 'row',
  },
  render: (args) => (
    <Stack {...args}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </Stack>
  ),
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
  render: (args) => (
    <Stack {...args}>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </Stack>
  ),
};

export default meta;
