import { Component } from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

import { SFrisbeeTacticDashboard } from './style';

const FrisbeeCanvas = dynamic(() => import('@/components/FrisbeeCanvas'));

class FrisbeeTacticDashboard extends Component {

  static async getInitialProps({ store }: any) {
    return { ...store };
  }

  render() {
    return (
      <SFrisbeeTacticDashboard className='page'>
        <FrisbeeCanvas />
      </SFrisbeeTacticDashboard>
    )
  }
}

export default connect(state => state)(FrisbeeTacticDashboard);
