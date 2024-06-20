import { Component as Splash } from '@/components/organisms/Splash';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Splash />
    </main>
  );
}
