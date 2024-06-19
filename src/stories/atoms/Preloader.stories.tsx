/**
 * @fileoverview Defines @/components/atoms/Preloader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Preloader } from '@/components/atoms/Preloader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Preloader',
  component: Preloader,
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const Progress00: Story = {
  args: {
    progress: 0,
  },
  render: (args) => <Preloader {...args} />,
};

export const Progress02: Story = {
  args: {
    progress: 0.2,
  },
  render: (args) => <Preloader {...args} />,
};

export const Progress04: Story = {
  args: {
    progress: 0.4,
  },
  render: (args) => <Preloader {...args} />,
};

export const Progress06: Story = {
  args: {
    progress: 0.6,
  },
  render: (args) => <Preloader {...args} />,
};

export const Progress08: Story = {
  args: {
    progress: 0.8,
  },
  render: (args) => <Preloader {...args} />,
};

export const Progress10: Story = {
  args: {
    progress: 1.0,
  },
  render: (args) => <Preloader {...args} />,
};

export default meta;
