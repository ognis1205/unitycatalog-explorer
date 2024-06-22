/**
 * @fileoverview Defines @/components/molecules/PreloaderTitle story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as PreloaderTitle } from '@/components/molecules/PreloaderTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PreloaderTitle',
  component: PreloaderTitle,
} satisfies Meta<typeof PreloaderTitle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initial: {
      fillOpacity: 0,
      pathLength: 0,
    },
    animate: {
      fillOpacity: 1,
      pathLength: 1,
    },
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
    strokeWidth: 0.5,
    strokeDasharray: '0 1',
  },
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <PreloaderTitle {...args} />
      </Box>
    </Flex>
  ),
};

export const Durations: Story = {
  args: {
    initial: {
      fillOpacity: 0,
      pathLength: 0,
    },
    animate: {
      fillOpacity: 1,
      pathLength: 1,
    },
    strokeWidth: 0.5,
    strokeDasharray: '0 1',
  },
  render: (args) => (
    <Flex direction="row">
      <Box boxSize="150">
        <PreloaderTitle
          {...args}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </Box>
      <Box boxSize="150">
        <PreloaderTitle
          {...args}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        />
      </Box>
      <Box boxSize="150">
        <PreloaderTitle
          {...args}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </Box>
    </Flex>
  ),
};

export default meta;
