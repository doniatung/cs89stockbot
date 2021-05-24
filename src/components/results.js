/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import News from './news';
import Projections from './projections';

const tabs = {
  PROJECTIONS: 'projections',
  NEWS: 'news',
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: tabs.PROJECTIONS,
    };
  }

  //   componentDidMount() {

  //   }

  setTab = (tab) => {
    this.setState({ tab });
  }


  render() {
    return (
      <div id="results">
        <h1>Stock: {this.props.stock.toUpperCase()}</h1>
        <Tabs
          activeKey={this.state.tab}
          onSelect={this.setTab}
        >
          <Tab eventKey={tabs.PROJECTIONS} title="Risk Projections">
            <div>hello</div>
            {/* <Projections stock={this.props.stock} /> */}
          </Tab>
          <Tab eventKey={tabs.NEWS} title="Recent News">
            <div>goodbye</div>
            {/* <News stock={this.props.stock} /> */}
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default Results;
