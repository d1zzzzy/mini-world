import Head from 'next/head';
import { connect } from 'react-redux';
import { Component } from 'react';

import { HamburgerLayout } from '@/components/layout/HamburgerLayout';

class Home extends Component {
  render() {
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
  }
};

export default connect(state => state)(Home);
