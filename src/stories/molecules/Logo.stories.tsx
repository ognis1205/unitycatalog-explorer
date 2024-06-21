/**
 * @fileoverview Defines @/components/molecules/Logo story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Logo } from '@/components/molecules/Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const ColorDefault: Story = {
  args: {},
  render: (args) => <Logo {...args} />,
};

export const ColorBlack: Story = {
  args: {
    color: 'black',
  },
  render: (args) => <Logo {...args} />,
};

export const ColorWhite: Story = {
  args: {
    color: 'white',
  },
  render: (args) => <Logo {...args} />,
};

export default meta;
