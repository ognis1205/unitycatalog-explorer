/**
 * @fileoverview Defines @/components/atoms/IconButton story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as IconButton } from '@/components/atoms/IconButton';
import { iconOf } from '@/utils/icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Default',
  },
  render: (args) => (
    <Flex direction="row">
      <IconButton {...args} icon={iconOf('home')} />
      <IconButton {...args} icon={iconOf('info')} />
      <IconButton {...args} icon={iconOf('catalog')} />
      <IconButton {...args} icon={iconOf('schema')} />
      <IconButton {...args} icon={iconOf('table')} />
      <IconButton {...args} icon={iconOf('plus')} />
      <IconButton {...args} icon={iconOf('question')} />
      <IconButton {...args} icon={iconOf('popover')} />
      <IconButton {...args} icon={iconOf('function')} />
      <IconButton {...args} icon={iconOf('volume')} />
      <IconButton {...args} icon={iconOf('open')} />
      <IconButton {...args} icon={iconOf('close')} />
      <IconButton {...args} icon={iconOf('search')} />
      <IconButton {...args} icon={iconOf('browser')} />
    </Flex>
  ),
};

export const ColorSchemes: Story = {
  args: {
    'aria-label': 'Color schemes',
  },
  render: (args) => (
    <Flex direction="row">
      <IconButton {...args} icon={iconOf('home')} colorScheme="ucPink" />
      <IconButton {...args} icon={iconOf('home')} colorScheme="ucYellow" />
      <IconButton {...args} icon={iconOf('home')} colorScheme="ucNavy" />
      <IconButton {...args} icon={iconOf('home')} colorScheme="ucDarkBlue" />
    </Flex>
  ),
};

export const Sizes: Story = {
  args: {
    'aria-label': 'Sizes',
  },
  render: (args) => (
    <Flex direction="row">
      <IconButton {...args} icon={iconOf('home')} size="sm" />
      <IconButton {...args} icon={iconOf('home')} size="md" />
      <IconButton {...args} icon={iconOf('home')} size="lg" />
    </Flex>
  ),
};

export const Variants: Story = {
  args: {
    'aria-label': 'Variants',
  },
  render: (args) => (
    <Flex direction="row">
      <IconButton {...args} icon={iconOf('home')} />
      <IconButton {...args} icon={iconOf('home')} colorScheme="teal" />
      <IconButton {...args} icon={iconOf('home')} variant="pale" />
      <IconButton
        {...args}
        icon={iconOf('home')}
        colorScheme="teal"
        variant="pale"
      />
      <IconButton {...args} icon={iconOf('home')} variant="frosted" />
      <IconButton
        {...args}
        icon={iconOf('home')}
        colorScheme="teal"
        variant="frosted"
      />
    </Flex>
  ),
};

export default meta;
