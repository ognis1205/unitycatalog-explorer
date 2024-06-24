/**
 * @fileoverview Defines @/components/molecules/NavFeedback story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as NavFeedback } from '@/components/molecules/NavFeedback';
import { defaultColorOf } from '@/style/chakra/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavFeedback',
  component: NavFeedback,
} satisfies Meta<typeof NavFeedback>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <NavFeedback {...args} />
    </Flex>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <NavFeedback {...args} color={defaultColorOf('ucPink')} />
      <NavFeedback {...args} color={defaultColorOf('ucYellow')} />
      <NavFeedback {...args} color={defaultColorOf('ucNavy')} />
      <NavFeedback {...args} color={defaultColorOf('ucDarkBlue')} />
    </Flex>
  ),
};

export default meta;
