import React, { Component } from 'react';
import PageLayout from '../elements/PageLayout';
import PortNavi from '../elements/PortNavi';

class PortfolioPage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="sixteen wide column">
            <div className="space">
              <PortNavi />
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default PortfolioPage;
