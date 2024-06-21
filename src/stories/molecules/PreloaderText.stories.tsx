/**
 * @fileoverview Defines @/components/molecules/PreloaderText story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as PreloaderText } from '@/components/molecules/PreloaderText';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PreloaderText',
  component: PreloaderText,
} satisfies Meta<typeof PreloaderText>;

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
  render: (args) => <PreloaderText {...args} />,
};

export default meta;
