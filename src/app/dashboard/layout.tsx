/**
 * @fileoverview Defines DashBoardLayout.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { usePathname } from 'next/navigation';
import { PiCaretRightBold } from 'react-icons/pi';

import { Component as Breadcrumb } from '@/components/atoms/Breadcrumb';
import { Component as BreadcrumbItem } from '@/components/atoms/BreadcrumbItem';
import { Component as BreadcrumbLink } from '@/components/atoms/BreadcrumbLink';
import { Component as Button } from '@/components/atoms/Button';
import { Component as Divider } from '@/components/atoms/Divider';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Stack } from '@/components/atoms/Stack';
import { Component as Table } from '@/components/atoms/Table';
import { Component as TableContainer } from '@/components/atoms/TableContainer';
import { Component as Tbody } from '@/components/atoms/Tbody';
import { Component as Td } from '@/components/atoms/Td';
import { Component as Text } from '@/components/atoms/Text';
import { Component as Th } from '@/components/atoms/Th';
import { Component as Thead } from '@/components/atoms/Thead';
import { Component as Tr } from '@/components/atoms/Tr';
import { Component as VStack } from '@/components/atoms/VStack';
import { Component as Tab } from '@/components/molecules/Tab';
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

const subNavbarItems = [
  {
    href: 'browse',
    iconName: 'schema' as const,
    name: 'Browse',
  },
  {
    href: 'detail',
    iconName: 'search' as const,
    name: 'Detail',
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
          <Flex alignItems="center" justifyContent="space-between" mb="0.8em">
            <Breadcrumb
              fontWeight="bold"
              fontSize="1.2em"
              separator={<PiCaretRightBold color="gray" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" color="dodger.500">
                  your_catalog_0
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" color="dodger.500">
                  your_schema_1
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" color="dodger.500">
                  your_table_2
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Button colorScheme="ucNavy">New Catalog</Button>
          </Flex>
          <VStack
            spacing={0}
            align="stretch"
            borderBottom={1}
            borderStyle="solid"
            borderColor="gray.200"
          >
            <Flex align="center" px="1em" py="0.75em" bg="gray.50">
              <Icon iconName="browser" color="gray.500" fontSize="1.2em" />
              <Text as="b" fontSize="1.2em" pl="0.5em">
                your_catalog_0
              </Text>
            </Flex>
            <Flex
              px={6}
              py={0}
              bg="gray.50"
              alignItems="center"
              justifyContent="space-between"
            >
              <Tab path="browse" items={subNavbarItems} />
            </Flex>
          </VStack>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Created At</Th>
                  <Th>Comment</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_0</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_1</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_2</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_3</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_4</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_5</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_6</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_7</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_8</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack gap="0.25em">
                      <Icon iconName="schema" color="dodger.500" />
                      <Text>your_schema_9</Text>
                    </HStack>
                  </Td>
                  <Td>22:28:58 Wednesday, June 26, 2024 (GMT+9)</Td>
                  <Td>This is my awesome schema.</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          {children}
        </PaneMain>
      </Stack>
    </>
  );
};

Layout.displayName = 'DashboardLayout';

export default Layout;
