import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import HomePage from './mainpages/HomePage';
import AboutPage from './mainpages/AboutPage';
import WritingPage from './mainpages/WritingPage';
import PortfolioPage from './mainpages/PortfolioPage';

import LastNight from './novels/LastNight';
import Wolf from './novels/Wolf';

import WellGo from './projects/WellGo';

import AppCss from '../public/css/app.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/writings" component={WritingPage}/>
          <Route path="/portfolio" component={PortfolioPage}/>

          <Route path="/novels/lastnight" component={LastNight}/>
          <Route path="/novels/wolf" component={Wolf}/>

          <Route path="/projects/WellGo" component={WellGo}/>
        </div>

      </Router>
    );
  }
}

export default App;
