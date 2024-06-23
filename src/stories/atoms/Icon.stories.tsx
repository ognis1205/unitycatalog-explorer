/**
 * @fileoverview Defines @/components/atoms/Icon story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Icon iconName="home" />
      <Icon iconName="info" />
      <Icon iconName="catalog" />
      <Icon iconName="schema" />
      <Icon iconName="table" />
      <Icon iconName="plus" />
      <Icon iconName="question" />
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
