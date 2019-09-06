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
      <div id = "projects">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Quote Generator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Geolocation
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
            <TabHeader apiname=" Forismatic.com API" apidesc=" Click the button for some awesome quotes!"/>
            <TabQuoteGenerator/>
          </TabPane>
          <TabPane tabId="2">
            <TabHeader apiname=" Google Maps API" apidesc=" Shows your location on a map provided by google maps api"/>
            <TabGeolocation/>
          </TabPane>
          <TabPane tabId="3">
            <TabHeader apiname=" OpenWeatherMap.com API" apidesc=" Shows weather conditions in your area"/>
            <TabWeather/>
          </TabPane>
          <TabPane tabId="4">
            <TabHeader apiname=" Google Custom Search Results API" apidesc=" Search like you would on Google!"/>
            <TabGoogleSearch/>
          </TabPane>
          <TabPane tabId="5">
              <TabHeader apiname="data extracted from Livescores.com " apidesc=" Click the button to get and update today's soccer scores!"/>
            <TabSoccer/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
