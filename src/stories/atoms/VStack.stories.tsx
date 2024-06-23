/**
 * @fileoverview Defines @/components/atoms/VStack story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as VStack } from '@/components/atoms/VStack';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'VStack',
  component: VStack,
} satisfies Meta<typeof VStack>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <VStack {...args}>
        <div>Default</div>
      </VStack>
    </Flex>
  ),
};

export default meta;
