/**
 * @fileoverview Defines /functions page.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Component as Route } from '@/components/atoms/Route';
import { Component as Nav } from '@/components/molecules/Nav';
import { Component as PaneMain } from '@/components/organisms/PaneMain';

import type { NextPage } from 'next';

const Page: NextPage<Record<string, never>> = () => (
  <PaneMain title="Not Found">
    <Nav
      src="/images/illustration-page-not-found.svg"
      alt="Not Found"
      title="Pardon my dust"
      message="This page is currently WIP and is planned to deliver in the near future."
    >
      <Route href="/">Back to home</Route>
    </Nav>
  </PaneMain>
);

Page.displayName = 'NotFoundPage';

export default Page;
