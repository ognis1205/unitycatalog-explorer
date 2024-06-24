/**
 * @fileoverview Defines @/components/molecules/NavTitle story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as NavTitle } from '@/components/molecules/NavTitle';
import { defaultColorOf } from '@/style/chakra/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavTitle',
  component: NavTitle,
} satisfies Meta<typeof NavTitle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <NavTitle {...args} />
    </Flex>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <NavTitle {...args} color={defaultColorOf('ucPink')} />
      <NavTitle {...args} color={defaultColorOf('ucYellow')} />
      <NavTitle {...args} color={defaultColorOf('ucNavy')} />
      <NavTitle {...args} color={defaultColorOf('ucDarkBlue')} />
    </Flex>
  ),
};

export default meta;
