/**
 * @fileoverview Defines @/components/molecules/NavBody story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Route } from '@/components/atoms/Route';
import { Component as NavBody } from '@/components/molecules/NavBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavBody',
  component: NavBody,
} satisfies Meta<typeof NavBody>;

type Story = StoryObj<typeof meta>;

export const BackToHome: Story = {
  args: {
    title: 'Oops! Something went wrong',
    message: "This page didn't load Unity Catalog Explorer correctly.",
  },
  render: (args) => (
    <Flex direction="row">
      <NavBody {...args}>
        <Route href="/">Back to home</Route>
      </NavBody>
    </Flex>
  ),
};

export const WorkInProgress: Story = {
  args: {
    title: 'Pardon my dust',
    message:
      'This page is currently WIP and is planned to deliver in the near future.',
  },
  render: (args) => (
    <Flex direction="row">
      <NavBody {...args}>
        <Route href="/">Back to home</Route>
      </NavBody>
    </Flex>
  ),
};

export default meta;