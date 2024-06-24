/**
 * @fileoverview Defines @/components/organisms/Navbar story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Navbar } from '@/components/organisms/Navbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/',
    home: '/',
    fbUrl: 'https://github.com/ognis1205/unitycatalog-explorer/issues',
    items: [
      {
        href: '/catalogs',
        iconName: 'catalog',
        name: 'Catalogs',
      },
      {
        href: '/functions',
        iconName: 'function',
        name: 'Functions',
      },
      {
        href: '/volumes',
        iconName: 'volume',
        name: 'Volumes',
      },
    ],
  },
  render: (args) => <Navbar {...args} />,
};

export const Paths: Story = {
  args: {
    path: '/',
    home: '/',
    fbUrl: 'https://github.com/ognis1205/unitycatalog-explorer/issues',
    items: [
      {
        href: '/catalogs',
        iconName: 'catalog',
        name: 'Catalogs',
      },
      {
        href: '/functions',
        iconName: 'function',
        name: 'Functions',
      },
      {
        href: '/volumes',
        iconName: 'volume',
        name: 'Volumes',
      },
    ],
  },
  render: (args) => (
    <Flex direction="column">
      <Navbar {...args} path="/catalogs" />
      <Navbar {...args} path="/functions" />
      <Navbar {...args} path="/volumes" />
    </Flex>
  ),
};

export default meta;
