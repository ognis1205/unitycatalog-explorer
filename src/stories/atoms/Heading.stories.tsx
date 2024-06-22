/**
 * @fileoverview Defines @/components/atoms/Heading story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Heading } from '@/components/atoms/Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Heading {...args}>Default</Heading>
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <Heading {...args} as="h1" size="4xl" noOfLines={1}>
        (4xl) Heading
      </Heading>
      <Heading {...args} as="h1" size="3xl" noOfLines={1}>
        (3xl) Heading
      </Heading>
      <Heading {...args} as="h2" size="2xl">
        (2xl) Heading
      </Heading>
      <Heading {...args} as="h2" size="xl">
        (xl) Heading
      </Heading>
      <Heading {...args} as="h3" size="lg">
        (lg) Heading
      </Heading>
      <Heading {...args} as="h4" size="md">
        (md) Heading
      </Heading>
      <Heading {...args} as="h5" size="sm">
        (sm) Heading
      </Heading>
      <Heading {...args} as="h5" size="xs">
        (xs) Heading
      </Heading>
    </Flex>
  ),
};

export default meta;
