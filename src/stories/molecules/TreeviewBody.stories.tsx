/**
 * @fileoverview Defines @/components/molecules/TreeviewBody story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewBody } from '@/components/molecules/TreeviewBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewBody',
  component: TreeviewBody,
} satisfies Meta<typeof TreeviewBody>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    assets: [
      {
        name: 'your_catalog_0',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_1',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_2',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_3',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_4',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_5',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_6',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_7',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_8',
        iconName: 'catalog',
        isDirectory: true,
      },
      {
        name: 'your_catalog_9',
        iconName: 'catalog',
        isDirectory: true,
      },
    ],
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewBody {...args} />
    </Flex>
  ),
};

export default meta;
