/**
 * @fileoverview Defines RootLayout.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */

import { Providers } from '@/app/providers';
import { fonts } from '@/style/chakra/theme';

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'Unity Catalog Explorer',
  description: 'Open, Multi-modal Catalog for Data & AI',
};

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <html lang="en" className={fonts.rubik.variable}>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

Layout.displayName = 'RootLayout';

export default Layout;
