/**
 * @fileoverview Defines @/components/organisms/NavbarFeedback story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as NavbarFeedback } from '@/components/organisms/NavbarFeedback';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavbarFeedback',
  component: NavbarFeedback,
} satisfies Meta<typeof NavbarFeedback>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://github.com/ognis1205/unitycatalog-explorer/issues',
  },
  render: (args) => (
    <Flex direction="row">
      <NavbarFeedback {...args} />
    </Flex>
  ),
};

export const Colors: Story = {
  args: {
    url: 'https://github.com/ognis1205/unitycatalog-explorer/issues',
  },
  render: (args) => (
    <Flex direction="column">
      <NavbarFeedback {...args} color="ucPink.500" />
      <NavbarFeedback {...args} color="ucYellow.500" />
      <NavbarFeedback {...args} color="ucNavy.500" />
      <NavbarFeedback {...args} color="ucDarkBlue.500" />
    </Flex>
  ),
};

export default meta;
