/**
 * @fileoverview Defines @/components/organisms/Splash story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Splash } from '@/components/organisms/Splash';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Splash',
  component: Splash,
} satisfies Meta<typeof Splash>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Splash {...args} />,
};

export default meta;
