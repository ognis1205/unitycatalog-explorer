/**
 * @fileoverview Defines @/components/atoms/Stack story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Stack } from '@/components/atoms/Stack';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Stack',
  component: Stack,
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Stack {...args}>
        <div>Default</div>
      </Stack>
    </Flex>
  ),
};

export const Directions: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Stack {...args} direction="row">
        <div>Row</div>
        <div>Row</div>
        <div>Row</div>
      </Stack>
      <Stack {...args} direction="column">
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
      </Stack>
    </Flex>
  ),
};

export default meta;
