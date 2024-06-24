/**
 * @fileoverview Defines @/components/atoms/Link story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Link } from '@/components/atoms/Link';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Link',
  component: Link,
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
  },
  render: (args) => (
    <Flex direction="row">
      <Link {...args}>Default</Link>
    </Flex>
  ),
};

export const Variants: Story = {
  args: {
    href: '/',
  },
  render: (args) => (
    <Flex direction="row">
      <Link {...args} variant="main">
        Main
      </Link>
      <Link {...args} colorScheme="teal" variant="main">
        Main
      </Link>
      <Link {...args} variant="menu">
        Menu
      </Link>
      <Link {...args} colorScheme="teal" variant="menu">
        Menu
      </Link>
      <Link {...args} variant="route">
        Route
      </Link>
      <Link {...args} colorScheme="teal" variant="route">
        Route
      </Link>
      <Link {...args} variant="tab">
        Tab
      </Link>
      <Link {...args} colorScheme="teal" variant="tab">
        Tab
      </Link>
      <Link {...args} variant="title">
        Title
      </Link>
      <Link {...args} colorScheme="teal" variant="title">
        Title
      </Link>
    </Flex>
  ),
};

export default meta;
