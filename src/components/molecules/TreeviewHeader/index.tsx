/**
 * @fileoverview Defines TreeviewHeader molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Box } from '@/components/atoms/Box';
import { Component as Button } from '@/components/atoms/Button';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Text } from '@/components/atoms/Text';
import { Component as VStack } from '@/components/atoms/VStack';

import type { Props as ButtonProps } from '@/components/atoms/Button';
import type { FC } from 'react';

export type Props = ButtonProps & {
  title: string;
};

export const Component: FC<Props> = ({ title, ...props }: Props) => (
  <VStack align="left">
    <HStack>
      <Flex align="center" mb="1em">
        <Icon iconName="browser" color="gray.500" fontSize="1.2em" />
        <Text as="b" fontSize="1.2em" pl="0.5em">
          {title}
        </Text>
      </Flex>
    </HStack>
    <Button {...props} transform="translate(1px)">
      <HStack>
        <Flex align="center">
          <Icon iconName="search" />
          <Box pl={2} pr={20} fontWeight={100}>
            Search assets
          </Box>
        </Flex>
      </HStack>
    </Button>
  </VStack>
);

Component.displayName = 'TreeviewHeader';
