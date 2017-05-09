// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import CardCss from '../../public/css/cards.css';


class WhiteBlock extends Component {
  render() {
    let { children } = this.props;

    return(
      <div className="row">
          <div className="two wide column" />
          <div className="twelve wide column writing_bg">
            { children }
          </div>
          <div className="two wide column" />
      </div>
    );
  }
}

export default WhiteBlock;
