/**
 * @fileoverview Defines Navbar organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Flex } from '@/components/atoms/Flex';
import { Component as VStack } from '@/components/atoms/VStack';
import { Component as Tab } from '@/components/molecules/Tab';
import { Component as NavbarFeedback } from '@/components/organisms/NavbarFeedback';
import { Component as NavbarTitle } from '@/components/organisms/NavbarTitle';

import type { Props as TabProps } from '@/components/molecules/Tab';
import type { FC } from 'react';

export type Props = {
  path: string;
  home: string;
  fbUrl: string;
  items: TabProps['items'];
};

export const Component: FC<Props> = ({ path, home, fbUrl, items }: Props) => (
  <VStack spacing={0} align="stretch">
    <Flex
      h={14}
      px={5}
      py={4}
      bg="gray.50"
      alignItems="center"
      justifyContent="space-between"
    >
      <NavbarTitle home={home} color="ucDarkBlue.500" />
      <NavbarFeedback url={fbUrl} color="gray" />
    </Flex>
    <Flex
      px={6}
      py={0}
      bg="gray.50"
      alignItems="center"
      justifyContent="space-between"
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
    >
      <Tab path={path} items={items} />
    </Flex>
  </VStack>
);

Component.displayName = 'Navbar';
