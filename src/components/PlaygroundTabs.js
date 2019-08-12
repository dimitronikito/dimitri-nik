import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import '../css/Playground.css'
import TabGeolocation from './Tabs/TabGeolocation';
import TabGoogleSearch from './Tabs/TabGoogleSearch';
import TabQuoteGenerator from './Tabs/TabQuoteGenerator';
import TabSoccer from './Tabs/TabSoccer';
import TabWeather from './Tabs/TabWeather';
import TabHeader from './Tabs/TabHeader';

export default class PlaygroundTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div id="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Geolocation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Quote Generator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Weather
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Google Search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Soccer Scores
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <TabHeader apiname=" Google Maps " />
            <TabGeolocation />
          </TabPane>
          <TabPane tabId="2">
            <TabQuoteGenerator/>
          </TabPane>
          <TabPane tabId="3">
            <TabWeather/>
          </TabPane>
          <TabPane tabId="4">
            <TabGoogleSearch/>
          </TabPane>
          <TabPane tabId="5">
            <TabSoccer/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
