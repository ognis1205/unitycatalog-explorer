'use client';

import { Component as Preloader } from '@/components/organisms/Preloader';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Preloader />
    </main>
  );
}
