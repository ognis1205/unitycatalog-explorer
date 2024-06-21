/**
 * @fileoverview Defines Main Pane organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

import { Component as Box } from '@/components/atoms/Box';

import type { Props as BoxProps } from '@/components/atoms/Box';
import type { FC, ReactNode } from 'react';

export type Props = BoxProps & {
  title: string;
  children: ReactNode;
};

export const Component: FC<Props> = ({ title, children, ...props }: Props) => (
  <Box {...props}>
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 30 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 30 },
        }}
        transition={{ duration: 0.6, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        {title && (
          <Head>
            <title>{`${title} - Unity Catalog Explorer`}</title>
            <meta
              name="twitter:title"
              content={`${title} - Unity Catalog Explorer`}
            />
            <meta
              property="og:title"
              content={`${title} - Unity Catalog Explorer`}
            />
          </Head>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  </Box>
);

Component.displayName = 'MainPane';
