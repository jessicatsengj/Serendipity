// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class PicCards extends Component {
  render() {

    let cardNum = this.props.cardNum;
    let cardImg = this.props.cardImg;
    let cardDescription = this.props.cardDescription;

    return (
      <div>
        <span className="number">{cardNum}</span>
        <div className="ts segment">
          <div className="ts divided items">
            <div className="item">
                <div className="image">
                    <img className="project_img" src={cardImg}></img>
                </div>
                <div className="content">
                    <div className="description">
                        {cardDescription}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PicCards;
