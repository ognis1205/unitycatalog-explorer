/**
 * @fileoverview Defines @/components/atoms/Image story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Image } from '@/components/atoms/Image';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Image',
  component: Image,
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/images/logo-color-dark-blue.svg',
    alt: 'Default',
  },
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="100">
        <Image {...args} alt="Default" />
      </Box>
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {
    src: '/images/logo-color-dark-blue.svg',
    alt: 'Sizes',
  },
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="50">
        <Image {...args} alt="Sizes" />
      </Box>
      <Box boxSize="100">
        <Image {...args} alt="Sizes" />
      </Box>
      <Box boxSize="150">
        <Image {...args} alt="Sizes" />
      </Box>
    </Flex>
  ),
};

export default meta;
