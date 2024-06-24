/**
 * @fileoverview Defines Not Found page.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Container } from '@/components/atoms/Container';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as Route } from '@/components/atoms/Route';
import { Component as PageTransitionArtwork } from '@/components/molecules/PageTransitionArtwork';
import { Component as PageTransitionMessage } from '@/components/molecules/PageTransitionMessage';
import { Component as MainPane } from '@/components/organisms/MainPane';

import type { NextPage } from 'next';

const Page: NextPage<Record<string, never>> = () => (
  <MainPane title="Not Found">
    <Flex flexDir="row">
      <Flex
        align="center"
        justify="center"
        h="100vh"
        w={{ base: '0%', md: '60%' }}
      >
        <PageTransitionArtwork
          src="/images/illustration-page-not-found.svg"
          alt="Not found"
          display={{ base: 'none', md: 'flex' }}
        />
      </Flex>
      <Flex
        align="center"
        justify="center"
        h="100vh"
        w={{ base: '100%', md: '40%' }}
      >
        <PageTransitionMessage
          as={Container}
          title="Oops! Something went wrong"
          message={"This page didn't load Unity Catalog Explorer correctly."}
        >
          <Route href="/">Back to home</Route>
        </PageTransitionMessage>
      </Flex>
    </Flex>
  </MainPane>
);

Page.displayName = 'NotFoundPage';

export default Page;
