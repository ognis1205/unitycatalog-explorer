/**
 * @fileoverview Defines @/components/atoms/Popover story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as IconButton } from '@/components/atoms/IconButton';
import { Component as Popover } from '@/components/atoms/Popover';
import { Component as PopoverArrow } from '@/components/atoms/PopoverArrow';
import { Component as PopoverBody } from '@/components/atoms/PopoverBody';
import { Component as PopoverContent } from '@/components/atoms/PopoverContent';
import { Component as PopoverTrigger } from '@/components/atoms/PopoverTrigger';
import { iconOf } from '@/utils/icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Popover {...args}>
        <PopoverTrigger>
          <IconButton aria-label="Popover" icon={iconOf('popover')} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <Box>Item</Box>
            <Box>Item</Box>
            <Box>Item</Box>
            <Box>Item</Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  ),
};

export default meta;
