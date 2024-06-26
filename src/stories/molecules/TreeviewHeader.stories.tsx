/**
 * @fileoverview Defines @/components/molecules/TreeviewHeader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as TreeviewHeader } from '@/components/molecules/TreeviewHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TreeviewHeader',
  component: TreeviewHeader,
} satisfies Meta<typeof TreeviewHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
  },
  render: (args) => (
    <Flex direction="row">
      <TreeviewHeader {...args} />
    </Flex>
  ),
};

export default meta;
