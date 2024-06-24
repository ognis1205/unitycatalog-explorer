/**
 * @fileoverview Defines @/components/molecules/PageTransitionArtwork story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as PageTransitionArtwork } from '@/components/molecules/PageTransitionArtwork';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PageTransitionArtwork',
  component: PageTransitionArtwork,
} satisfies Meta<typeof PageTransitionArtwork>;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    src: '/images/illustration-page-not-found.svg',
    alt: 'Not Found',
  },
  render: (args) => (
    <Flex direction="row" h="100vh">
      <PageTransitionArtwork {...args} />
    </Flex>
  ),
};

export default meta;