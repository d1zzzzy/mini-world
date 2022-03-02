import type { NextPage } from 'next';
import Head from 'next/head';

import { HamburgerLayout } from '@/components/layout/HamburgerLayout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>凡生</title>
      </Head>

      <HamburgerLayout>
        零零落落零零落落
      </HamburgerLayout>
    </div>
  )
};

export default Home;
