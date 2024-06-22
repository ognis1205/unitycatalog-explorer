/**
 * @fileoverview Defines @/molecules/Message story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Route } from '@/components/atoms/Route';
import { Component as Message } from '@/components/molecules/Message';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Message',
  component: Message,
} satisfies Meta<typeof Message>;

type Story = StoryObj<typeof meta>;

export const BackToHome: Story = {
  args: {
    title: 'Oops! Something went wrong',
    message: "This page didn't load Unity Catalog Explorer correctly.",
  },
  render: (args) => (
    <Message {...args}>
      <Route href="/">Back to home</Route>
    </Message>
  ),
};

export const WorkInProgress: Story = {
  args: {
    title: 'Pardon my dust',
    message:
      'This page is currently WIP and is planned to deliver in the near future.',
  },
  render: (args) => (
    <Message {...args}>
      <Route href="/">Back to home</Route>
    </Message>
  ),
};

export default meta;
