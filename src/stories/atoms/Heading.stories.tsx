/**
 * @fileoverview Defines @/components/atoms/Heading story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Heading } from '@/components/atoms/Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Size4Xl: Story = {
  args: {
    as: 'h1',
    size: '4xl',
    noOfLines: 1,
  },
  render: (args) => <Heading {...args}>(4xl) Heading</Heading>,
};

export const Size2Xl: Story = {
  args: {
    as: 'h2',
    size: '2xl',
  },
  render: (args) => <Heading {...args}>(2xl) Heading</Heading>,
};

export const SizeLg: Story = {
  args: {
    as: 'h3',
    size: 'lg',
  },
  render: (args) => <Heading {...args}>(lg) Heading</Heading>,
};

export const SizeMd: Story = {
  args: {
    as: 'h4',
    size: 'md',
  },
  render: (args) => <Heading {...args}>(md) Heading</Heading>,
};

export const SizeSm: Story = {
  args: {
    as: 'h5',
    size: 'sm',
  },
  render: (args) => <Heading {...args}>(md) Heading</Heading>,
};

export default meta;
