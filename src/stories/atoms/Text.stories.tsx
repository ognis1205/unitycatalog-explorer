/**
 * @fileoverview Defines @/components/atoms/Text story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Text } from '@/components/atoms/Text';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Text',
  component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex direction="row">
      <Text {...args}>Text</Text>
    </Flex>
  ),
};

export const Styles: Story = {
  args: {},
  render: (args) => (
    <Flex direction="column">
      <Text {...args} as="b">
        Bold
      </Text>
      <Text {...args} as="i">
        Italic
      </Text>
      <Text {...args} as="u">
        Underline
      </Text>
      <Text {...args} as="abbr">
        I18N
      </Text>
      <Text {...args} as="cite">
        Citation
      </Text>
      <Text {...args} as="del">
        Deleted
      </Text>
      <Text {...args} as="em">
        Emphasis
      </Text>
      <Text {...args} as="ins">
        Inserted
      </Text>
      <Text {...args} as="kbd">
        Ctrl + C
      </Text>
      <Text {...args} as="mark">
        Highlighted
      </Text>
      <Text {...args} as="s">
        Strikethrough
      </Text>
      <Text {...args} as="samp">
        Sample
      </Text>
      <Text {...args} as="sub">
        sub
      </Text>
      <Text {...args} as="sup">
        sup
      </Text>
    </Flex>
  ),
};

export default meta;
