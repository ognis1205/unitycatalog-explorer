/**
 * @fileoverview Defines @/components/organisms/PaneNav story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as PaneNav } from '@/components/organisms/PaneNav';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PaneNav',
  component: PaneNav,
} satisfies Meta<typeof PaneNav>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Default', children: 'Default' },
  render: (args) => <PaneNav {...args} />,
};

export default meta;
