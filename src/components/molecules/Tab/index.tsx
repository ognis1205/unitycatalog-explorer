/**
 * @fileoverview Defines Tab molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { Component as Box } from '@/components/atoms/Box';
import { Component as Flex } from '@/components/atoms/Flex';
import { Component as IconButton } from '@/components/atoms/IconButton';
import { Component as Popover } from '@/components/atoms/Popover';
import { Component as PopoverArrow } from '@/components/atoms/PopoverArrow';
import { Component as PopoverBody } from '@/components/atoms/PopoverBody';
import { Component as PopoverContent } from '@/components/atoms/PopoverContent';
import { Component as PopoverTrigger } from '@/components/atoms/PopoverTrigger';
import { Component as Stack } from '@/components/atoms/Stack';
import { Component as TabItem } from '@/components/molecules/TabItem';
import { iconOf } from '@/utils/icon';

import type { Props as StackProps } from '@/components/atoms/Stack';
import type { Props as TabItemProps } from '@/components/molecules/TabItem';
import type { FC } from 'react';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'direction' | 'alignItems' | 'overflow'>
> & {
  path: string;
  items: TabItemProps[];
};

export const Component: FC<Props> = ({ path, items, ...props }: Props) => {
  const [numberOfItemsDisplayed, setNumberOfItemsDisplayed] =
    useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    const container = ref.current;
    const links = ref.current?.children;
    if (container && links && links.length > 0) {
      const threshold =
        (container as HTMLDivElement).offsetLeft +
        (container as HTMLDivElement).offsetWidth;
      let numItems = 0;
      for (let i = 0; i < links.length; i++) {
        const x =
          (links[i] as HTMLDivElement).offsetLeft +
          (links[i] as HTMLDivElement).offsetWidth;
        if (x > threshold) {
          break;
        }
        numItems++;
      }
      setNumberOfItemsDisplayed(numItems);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Stack {...props} direction="row" alignItems="center" overflow="hidden">
      <Stack
        ref={ref}
        pr={1}
        spacing={5}
        direction="row"
        alignItems="center"
        overflow="hidden"
      >
        {items.map(({ href, ...props }, i) => {
          return (
            <Flex
              key={i}
              h={10}
              alignItems="center"
              visibility={i >= numberOfItemsDisplayed ? 'hidden' : undefined}
              borderBottom={href === path ? 2 : undefined}
              borderStyle={href === path ? 'solid' : undefined}
              borderColor={href === path ? 'ucNavy.900' : undefined}
            >
              <TabItem
                href={href}
                {...props}
                color={href === path ? 'ucNavy.900' : undefined}
              />
            </Flex>
          );
        })}
      </Stack>
      <Box
        visibility={
          items.length === numberOfItemsDisplayed ? 'hidden' : undefined
        }
      >
        <Popover>
          <PopoverTrigger>
            <IconButton
              size="sm"
              aria-label="Tab menu"
              icon={iconOf('popover')}
            />
          </PopoverTrigger>
          <PopoverContent w="100%">
            <PopoverArrow />
            <PopoverBody p={3}>
              {items.slice(numberOfItemsDisplayed).map((props, i) => {
                return <TabItem key={i} {...props} />;
              })}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

Component.displayName = 'Tab';
