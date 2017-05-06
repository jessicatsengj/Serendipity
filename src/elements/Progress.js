// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Progress extends Component {
  render() {

    return(
      <div className="ts steps">
         <div className="step">
             <div className="content">
                 <div className="title">User Research</div>
             </div>
         </div>
         <div className="active step">
             <div className="content">
                 <div className="title">Need Finding</div>
             </div>
         </div>
         <div className="disabled step">
             <div className="content">
                 <div className="title">Ideation</div>
             </div>
         </div>
         <div className="disabled step">
             <div className="content">
                 <div className="title">Storyboards</div>
             </div>
         </div>
         <div className="disabled step">
             <div className="content">
                 <div className="title">Prototyping</div>
             </div>
         </div>
         <div className="disabled step">
             <div className="content">
                 <div className="title">Testing</div>
             </div>
         </div>
      </div>
    );
  }
}

export default Progress;
