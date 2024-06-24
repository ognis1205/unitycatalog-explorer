/**
 * @fileoverview Defines @/components/molecules/PageTransition story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Route } from '@/components/atoms/Route';
import { Component as PageTransition } from '@/components/molecules/PageTransition';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PageTransition',
  component: PageTransition,
} satisfies Meta<typeof PageTransition>;

type Story = StoryObj<typeof meta>;

export const BackToHome: Story = {
  args: {
    src: '/images/illustration-page-not-found.svg',
    alt: 'Not Found',
    title: 'Oops! Something went wrong',
    message: "This page didn't load Unity Catalog Explorer correctly.",
    children: <Route href="/">Back to home</Route>,
  },
  render: (args) => (
    <Flex direction="row">
      <PageTransition {...args} />
    </Flex>
  ),
};

export const WorkInProgress: Story = {
  args: {
    src: '/images/illustration-page-not-found.svg',
    alt: 'Not Found',
    title: 'Pardon my dust',
    message:
      'This page is currently WIP and is planned to deliver in the near future.',
    children: <Route href="/">Back to home</Route>,
  },
  render: (args) => (
    <Flex direction="row">
      <PageTransition {...args} />
    </Flex>
  ),
};

export default meta;
