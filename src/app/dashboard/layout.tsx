/**
 * @fileoverview Defines DashBoardLayout.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { usePathname } from 'next/navigation';

import { Component as Divider } from '@/components/atoms/Divider';
import { Component as Stack } from '@/components/atoms/Stack';
import { Component as TreeviewBody } from '@/components/molecules/TreeviewBody';
import { Component as TreeviewHeader } from '@/components/molecules/TreeviewHeader';
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

const treeviewAssets = [
  {
    name: 'your_catalog_0',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_1',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_2',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_3',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_4',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_5',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_6',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_7',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_8',
    iconName: 'catalog' as const,
    isDirectory: true,
  },
  {
    name: 'your_catalog_9',
    iconName: 'catalog' as const,
    isDirectory: true,
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
        py={5}
        px={5}
        maxW="1280px"
        h="100vh"
        flexDir={{ base: 'column', md: 'row' }}
        spacing={4}
        display="flex"
        overflow="hidden"
      >
        <PaneNav
          w={{ base: '100%', md: '256px', xl: '296px' }}
          overflow="hidden"
          display="flex"
        >
          <TreeviewHeader title="Catalogs" mb="1em" />
          <Divider />
          <TreeviewBody assets={treeviewAssets} overflow="scroll" />
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
