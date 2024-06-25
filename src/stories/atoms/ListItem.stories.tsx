/**
 * @fileoverview Defines @/components/atoms/ListItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as ListItem } from '@/components/atoms/ListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ListItem',
  component: ListItem,
} satisfies Meta<typeof ListItem>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <ListItem {...args}>Default</ListItem>
    </Flex>
  ),
};

export const Paddings: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <ListItem {...args} pl={1}>
        Padding Left 1
      </ListItem>
      <ListItem {...args} pl={2}>
        Padding Left 2
      </ListItem>
      <ListItem {...args} pl={3}>
        Padding Left 3
      </ListItem>
      <ListItem {...args} pr={1}>
        Padding Right 1
      </ListItem>
      <ListItem {...args} pr={2}>
        Padding Right 2
      </ListItem>
      <ListItem {...args} pr={3}>
        Padding Right 3
      </ListItem>
    </Flex>
  ),
};

export const Margins: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <ListItem {...args} ml={1}>
        Margin Left 1
      </ListItem>
      <ListItem {...args} ml={2}>
        Margin Left 2
      </ListItem>
      <ListItem {...args} ml={3}>
        Margin Left 3
      </ListItem>
      <ListItem {...args} mr={1}>
        Margin Right 1
      </ListItem>
      <ListItem {...args} mr={2}>
        Margin Right 2
      </ListItem>
      <ListItem {...args} mr={3}>
        Margin Right 3
      </ListItem>
    </Flex>
  ),
};

export default meta;
