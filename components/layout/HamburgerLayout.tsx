import React from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import styles from '@/styles/layout/hamburger.module.less';

export const HamburgerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.hamburger}>
      <Header />

      <main className={styles.content}>
        { children }
      </main>

      <Footer />
    </div>
  )
}