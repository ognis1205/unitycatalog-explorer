/**
 * @fileoverview Defines @/components/molecules/IllustrationBackground story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as IllustrationBackground } from '@/components/molecules/IllustrationBackground';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'IllustrationBackground',
  component: IllustrationBackground,
} satisfies Meta<typeof IllustrationBackground>;

type Story = StoryObj<typeof meta>;

export const WallpaperWave: Story = {
  args: {
    src: '/images/wallpaper-wave.png',
  },
  render: (args) => (
    <Flex direction="row" h="100vh">
      <IllustrationBackground {...args} />
    </Flex>
  ),
};

export default meta;
