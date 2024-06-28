/**
 * @fileoverview Defines @/components/atoms/BreadcrumbItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as BreadcrumbItem } from '@/components/molecules/BreadcrumbItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'BreadcrumbItem',
  component: BreadcrumbItem,
} satisfies Meta<typeof BreadcrumbItem>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    name: 'Default',
  },
  render: (args) => (
    <Flex direction="row">
      <BreadcrumbItem {...args} />
    </Flex>
  ),
};

export const Sentinel: Story = {
  args: {
    href: '/',
    name: 'Default',
  },
  render: (args) => (
    <Flex direction="row">
      <BreadcrumbItem {...args} isSentinel />
    </Flex>
  ),
};

export default meta;
