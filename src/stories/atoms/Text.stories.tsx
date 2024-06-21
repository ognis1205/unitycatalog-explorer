/**
 * @fileoverview Defines @/components/atoms/Text story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Text } from '@/components/atoms/Text';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Text',
  component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Text {...args}>Text</Text>,
};

export const Strong: Story = {
  args: {
    as: 'b',
  },
  render: (args) => <Text {...args}>Text</Text>,
};

export const Italic: Story = {
  args: {
    as: 'i',
  },
  render: (args) => <Text {...args}>Text</Text>,
};

export default meta;
