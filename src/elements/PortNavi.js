// var react = require('react');
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Projects from '../mainpages/Projects';
import Drawings from '../mainpages/Drawings';


class PortNavi extends Component {

  render() {
    return (

      <Router>
        <div>
            <div className="ts fluid container nav port_navi">
              <div className="ts menu green">
                <div className="right menu">
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/projects">Projects</NavLink></div>
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/drawings">Drawings</NavLink></div>
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/interaction">Interaction</NavLink></div>
                </div>
              </div>
            </div>


            <div>
              <Route exact path="/projects" component={Projects}/>
              <Route path="/drawings" component={Drawings}/>
              <Route path="/interaction" component={Interaction}/>
            </div>
        </div>
      </Router>

    );
  }
}

const Interaction = () => (
  <div>
    <h2>Interaction</h2>
  </div>
)
export default PortNavi
