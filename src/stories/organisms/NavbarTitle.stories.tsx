/**
 * @fileoverview Defines @/components/organisms/NavbarTitle story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as NavbarTitle } from '@/components/organisms/NavbarTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavbarTitle',
  component: NavbarTitle,
} satisfies Meta<typeof NavbarTitle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    home: '/',
  },
  render: (args) => (
    <Flex direction="row">
      <NavbarTitle {...args} />
    </Flex>
  ),
};

export const Colors: Story = {
  args: {
    home: '/',
  },
  render: (args) => (
    <Flex direction="column">
      <NavbarTitle {...args} color="ucPink.500" />
      <NavbarTitle {...args} color="ucYellow.500" />
      <NavbarTitle {...args} color="ucNavy.500" />
      <NavbarTitle {...args} color="ucDarkBlue.500" />
    </Flex>
  ),
};

export default meta;
