/**
 * @fileoverview Defines DashBoardLayout.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { usePathname } from 'next/navigation';

import { Component as Stack } from '@/components/atoms/Stack';
import { Component as Navbar } from '@/components/organisms/Navbar';
import { Component as PaneMain } from '@/components/organisms/PaneMain';
import { Component as PaneNav } from '@/components/organisms/PaneNav';

import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const navbarItems = [
  {
    href: '/dashboard/catalogs',
    iconName: 'catalog' as const,
    name: 'Catalogs',
  },
  {
    href: '/dashboard/functions',
    iconName: 'function' as const,
    name: 'Functions',
  },
  {
    href: '/dashboard/volumes',
    iconName: 'volume' as const,
    name: 'Volumes',
  },
];

const Layout: FC<Props> = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar
        path={pathname}
        home="/dashboard/catalogs"
        fbUrl="https://github.com/ognis1205/unitycatalog-explorer/issues"
        items={navbarItems}
      />
      <Stack
        m="auto"
        py={10}
        px={10}
        maxW="1280px"
        h="100vh"
        flexDir={{ base: 'column', md: 'row' }}
        spacing={4}
      >
        <PaneNav w={{ base: '100%', md: '256px', xl: '296px' }}>
          Tree View Here!
        </PaneNav>
        <PaneMain title="Dashboard" minW={0} flexGrow={1} px={5}>
          {children}
        </PaneMain>
      </Stack>
    </>
  );
};

Layout.displayName = 'DashboardLayout';

export default Layout;
