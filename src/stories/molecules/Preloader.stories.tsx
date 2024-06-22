/**
 * @fileoverview Defines @/components/molecules/Preloader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Preloader } from '@/components/molecules/Preloader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Preloader',
  component: Preloader,
} satisfies Meta<typeof Preloader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Preloader {...args} />,
};

export default meta;
