/**
 * @fileoverview Defines @/components/atoms/Icon story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Icon } from '@/components/atoms/Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'home',
  },
  render: (args) => (
    <Flex direction="row">
      <Icon {...args} iconName="home" />
      <Icon {...args} iconName="info" />
      <Icon {...args} iconName="catalog" />
      <Icon {...args} iconName="schema" />
      <Icon {...args} iconName="table" />
      <Icon {...args} iconName="plus" />
      <Icon {...args} iconName="question" />
      <Icon {...args} iconName="popover" />
      <Icon {...args} iconName="function" />
      <Icon {...args} iconName="volume" />
      <Icon {...args} iconName="open" />
      <Icon {...args} iconName="close" />
      <Icon {...args} iconName="search" />
      <Icon {...args} iconName="browser" />
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {
    iconName: 'home',
  },
  render: (args) => (
    <Flex direction="row">
      <Icon {...args} boxSize="4" />
      <Icon {...args} boxSize="6" />
      <Icon {...args} boxSize="8" />
    </Flex>
  ),
};

export default meta;
