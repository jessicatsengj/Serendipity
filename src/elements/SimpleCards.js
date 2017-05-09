// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import CardCss from '../../public/css/cards.css';


class SimpleCards extends Component {
  render() {

    let cardDescription = this.props.cardDescription;

    return(

      <div className="ts flatted card">
          <div className="content">
              {cardDescription}
          </div>
      </div>
    );
  }
}

export default SimpleCards;
