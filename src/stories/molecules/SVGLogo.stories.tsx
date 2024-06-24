/**
 * @fileoverview Defines @/components/molecules/SVGLogo story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as SVGLogo } from '@/components/molecules/SVGLogo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SVGLogo',
  component: SVGLogo,
} satisfies Meta<typeof SVGLogo>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <SVGLogo {...args} />
      </Box>
    </Flex>
  ),
};

export const Colors: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <SVGLogo {...args} />
      </Box>
      <Box boxSize="150">
        <SVGLogo {...args} color="black" />
      </Box>
      <Box boxSize="150">
        <SVGLogo {...args} color="white" />
      </Box>
    </Flex>
  ),
};

export default meta;
