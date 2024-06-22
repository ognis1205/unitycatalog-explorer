/**
 * @fileoverview Defines @/components/atoms/Button story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Button } from '@/components/atoms/Button';
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Button {...args}>Default</Button>
    </Flex>
  ),
};

export const ColorSchemes: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Button {...args} colorScheme="ucPink">
        Pink
      </Button>
      <Button {...args} colorScheme="ucYellow">
        Yellow
      </Button>
      <Button {...args} colorScheme="ucNavy">
        Navy
      </Button>
      <Button {...args} colorScheme="ucDarkBlue">
        Dark Blue
      </Button>
    </Flex>
  ),
};

export const Variants: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Button {...args} variant="main">
        Main
      </Button>
      <Button {...args} colorScheme="teal" variant="main">
        Main
      </Button>
      <Button {...args} variant="menu">
        Menu
      </Button>
      <Button {...args} colorScheme="teal" variant="menu">
        Menu
      </Button>
    </Flex>
  ),
};

export default meta;
