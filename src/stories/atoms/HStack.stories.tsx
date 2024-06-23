/**
 * @fileoverview Defines @/components/atoms/HStack story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as HStack } from '@/components/atoms/HStack';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'HStack',
  component: HStack,
} satisfies Meta<typeof HStack>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <HStack {...args}>
        <div>Default</div>
      </HStack>
    </Flex>
  ),
};

export default meta;
