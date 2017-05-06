// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Footer extends Component {
  render() {

    return(

      <div className="row black_block white footer">
        <div className="two wide column" />
        <div className="four wide column foot_block foot_line">
          <p className="foot_text">jessica834945@yahoo.com.tw</p>
        </div>
        <div className="four wide column foot_block foot_line">
          <div className="foot_text">
            <h2>JESSICA TSENG</h2>
            <h4>Designer</h4>
          </div>
        </div>
        <div className="four wide column foot_block ">
          <div className="foot_text">
            <Link className="myCardsLink icon_link" to="/novels/lastnight"><i className="facebook square icon"></i></Link>
            <Link className="myCardsLink icon_link" to="/novels/lastnight"><i className="instagram icon"></i></Link>
          </div>
        </div>
        <div className="two wide column" />
      </div>



    );
  }
}

export default Footer;
