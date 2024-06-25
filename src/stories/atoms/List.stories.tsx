/**
 * @fileoverview Defines @/components/atoms/List story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as List } from '@/components/atoms/List';
import { Component as ListItem } from '@/components/atoms/ListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'List',
  component: List,
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <List {...args}>
        <ListItem>Default</ListItem>
        <ListItem>Default</ListItem>
        <ListItem>Default</ListItem>
      </List>
    </Flex>
  ),
};

export const Nested: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <List {...args}>
        <ListItem>Nested</ListItem>
        <ListItem>
          <List {...args} pl="1em">
            <ListItem>Nested</ListItem>
            <ListItem>
              <List {...args} pl="1em">
                <ListItem>Nested</ListItem>
                <ListItem />
                <ListItem>Nested</ListItem>
              </List>
            </ListItem>
            <ListItem>Nested</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List {...args}>
            <ListItem>Nested</ListItem>
            <ListItem>
              <List {...args}>
                <ListItem>Nested</ListItem>
                <ListItem />
                <ListItem>Nested</ListItem>
              </List>
            </ListItem>
            <ListItem>Nested</ListItem>
          </List>
        </ListItem>
        <ListItem>Nested</ListItem>
      </List>
    </Flex>
  ),
};

export default meta;
