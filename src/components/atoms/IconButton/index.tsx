/**
 * @fileoverview Defines IconButton atom (re-exportation for backward compatibility).
 * @see {@link https://github.com/chakra-ui/chakra-ui/discussions/3435|GitHub}
 * @see {@link https://v2.chakra-ui.com/docs/styled-system/chakra-factory|ChakraUI}
 * @see {@link https://zenn.dev/t_keshi/scraps/2322ed9224457a|Zenn(Japanese)}
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { IconButton, css } from '@chakra-ui/react';
import styled from '@emotion/styled';

import type { IconButtonProps } from '@chakra-ui/react';

export type Props = IconButtonProps;

export const Component = styled(IconButton)((props) =>
  css({
    // Placeholder.
  })(props.theme),
);

Component.displayName = 'IconButton';
