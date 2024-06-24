/**
 * @fileoverview Defines PageTransition molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Container } from '@/components/atoms/Container';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as PageTransitionArtwork } from '@/components/molecules/PageTransitionArtwork';
import { Component as PageTransitionMessage } from '@/components/molecules/PageTransitionMessage';

import type { Props as PageTransitionArtworkProps } from '@/components/molecules/PageTransitionArtwork';
import type { Props as PageTransitionMessageProps } from '@/components/molecules/PageTransitionMessage';
import type { FC, ReactNode } from 'react';

export type Props = {
  src: PageTransitionArtworkProps['src'];
  alt: PageTransitionArtworkProps['alt'];
  title: PageTransitionMessageProps['title'];
  message: PageTransitionMessageProps['message'];
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
      <PageTransitionArtwork
        src={src}
        alt={alt}
        display={{ base: 'none', md: 'flex' }}
      />
    </Flex>
    <Flex
      align="center"
      justify="center"
      h="100vh"
      w={{ base: '100%', md: '40%' }}
    >
      <PageTransitionMessage as={Container} title={title} message={message}>
        {children}
      </PageTransitionMessage>
    </Flex>
  </Flex>
);

Component.displayName = 'PageTransition';
