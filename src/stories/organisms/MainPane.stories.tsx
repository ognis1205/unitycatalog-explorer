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

export const TitleCatalogs: Story = {
  args: { title: 'Catalogs', children: 'Catalogs' },
  render: (args) => <MainPane {...args} />,
};

export const TitleFunctions: Story = {
  args: { title: 'Functions', children: 'Functions' },
  render: (args) => <MainPane {...args} />,
};

export const TitleVolumes: Story = {
  args: { title: 'Volumes', children: 'Volumes' },
  render: (args) => <MainPane {...args} />,
};

export default meta;
