/**
 * @fileoverview Defines @/components/molecules/Title story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Title } from '@/components/molecules/Title';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Title',
  component: Title,
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <Title {...args} />
      </Box>
    </Flex>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <Title {...args} />
      </Box>
      <Box boxSize="150">
        <Title {...args} color="black" />
      </Box>
      <Box boxSize="150">
        <Title {...args} color="white" />
      </Box>
    </Flex>
  ),
};

export default meta;
