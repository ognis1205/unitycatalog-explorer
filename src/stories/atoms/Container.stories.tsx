/**
 * @fileoverview Defines @/components/atoms/Container story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Container } from '@/components/atoms/Container';
import { Component as Flex } from '@/components/atoms/Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Container',
  component: Container,
} satisfies Meta<typeof Container>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Container {...args}>Default</Container>
    </Flex>
  ),
};

export default meta;
