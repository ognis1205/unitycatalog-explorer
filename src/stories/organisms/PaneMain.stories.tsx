/**
 * @fileoverview Defines @/components/organisms/PaneMain story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as PaneMain } from '@/components/organisms/PaneMain';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PaneMain',
  component: PaneMain,
} satisfies Meta<typeof PaneMain>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Default', children: 'Default' },
  render: (args) => <PaneMain {...args} />,
};

export default meta;
