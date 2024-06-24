/**
 * @fileoverview Defines Nav molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Container } from '@/components/atoms/Container';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as NavBody } from '@/components/molecules/NavBody';
import { Component as NavImage } from '@/components/molecules/NavImage';

import type { Props as NavBodyProps } from '@/components/molecules/NavBody';
import type { Props as NavImageProps } from '@/components/molecules/NavImage';
import type { FC, ReactNode } from 'react';

export type Props = {
  src: NavImageProps['src'];
  alt: NavImageProps['alt'];
  title: NavBodyProps['title'];
  message: NavBodyProps['message'];
  children: ReactNode;
};

export const Component: FC<Props> = ({
  src,
  alt,
  title,
  message,
  children,
}: Props) => (
  <Flex flexDir="row">
    <Flex
      align="center"
      justify="center"
      h="100vh"
      w={{ base: '0%', md: '60%' }}
    >
      <NavImage src={src} alt={alt} display={{ base: 'none', md: 'flex' }} />
    </Flex>
    <Flex
      align="center"
      justify="center"
      h="100vh"
      w={{ base: '100%', md: '40%' }}
    >
      <NavBody as={Container} title={title} message={message}>
        {children}
      </NavBody>
    </Flex>
  </Flex>
);

Component.displayName = 'Nav';
