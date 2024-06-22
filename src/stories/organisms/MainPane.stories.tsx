/**
 * @fileoverview Defines @/components/organisms/MainPane story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as MainPane } from '@/components/organisms/MainPane';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MainPane',
  component: MainPane,
} satisfies Meta<typeof MainPane>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Default', children: 'Default' },
  render: (args) => <MainPane {...args} />,
};

export default meta;
