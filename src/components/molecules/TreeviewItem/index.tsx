/**
 * @fileoverview Defines TreeviewItem molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { memo, useCallback, useRef, useState } from 'react';

import { Component as Box } from '@/components/atoms/Box';
import { Component as HStack } from '@/components/atoms/HStack';
import { Component as Icon } from '@/components/atoms/Icon';
import { Component as Text } from '@/components/atoms/Text';
import { Component as TreeviewChevron } from '@/components/molecules/TreeviewChevron';
import { Component as TreeviewCollapse } from '@/components/molecules/TreeviewCollapse';

import type { Props as BoxProps } from '@/components/atoms/Box';
import type { Toggler as TreeviewChevronToggler } from '@/components/molecules/TreeviewChevron';
import type { Toggler as TreeviewCollapseToggler } from '@/components/molecules/TreeviewCollapse';
import type { IconName } from '@/utils/icon';
import type { FC, SyntheticEvent } from 'react';

export type Props = BoxProps & {
  asset: AssetNode;
};

export const Component: FC<Props> = memo(({ asset, ...props }: Props) => {
  const [children, setChildren] = useState<AssetNode[] | null>(null);

  const chevronRef = useRef<TreeviewChevronToggler>(null);

  const collapseRef = useRef<TreeviewCollapseToggler>(null);

  const handleClick = useCallback(
    (e: SyntheticEvent<SVGElement>): void => {
      chevronRef.current?.toggle();
      collapseRef.current?.toggle();
      if (!children) {
        let newChildren = null;
        switch (asset.iconName) {
          case 'catalog':
            newChildren = Array(...Array(10)).map((_, i) => {
              return {
                name: `your_schema_${i}`,
                iconName: 'schema' as IconName,
                isDirectory: true,
              };
            });
            break;
          case 'schema':
            newChildren = Array(...Array(10)).map((_, i) => {
              return {
                name: `your_table_${i}`,
                iconName: 'table' as IconName,
                isDirectory: false,
              };
            });
            break;
          default:
            break;
        }
        setChildren(newChildren);
      }
      e.preventDefault();
      e.stopPropagation();
    },
    [asset.iconName, children, setChildren],
  );

  return (
    <Box {...props} my="0.5em">
      <HStack gap="0.25em">
        {asset.isDirectory && (
          <TreeviewChevron ref={chevronRef} onClick={handleClick} />
        )}
        <Icon
          iconName={asset.iconName}
          color={asset.isDirectory ? 'dodger.500' : 'gray.500'}
        />
        <Text>{asset.name}</Text>
      </HStack>
      <TreeviewCollapse
        ref={collapseRef}
        ml="0.5em"
        pl="1em"
        borderLeft="1px"
        borderColor="gray.100"
      >
        {children &&
          children.map((asset: AssetNode, index) => (
            <Component {...props} key={index} asset={asset} />
          ))}
      </TreeviewCollapse>
    </Box>
  );
});

Component.displayName = 'TreeviewItem';
