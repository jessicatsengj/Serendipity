// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class TitleIntro extends Component {
  render() {
    let title = this.props.title;
    let date = this.props.date;
    let type = this.props.type;

    return(
      <div className="title_intro">
        <h1>{title}</h1>
        <div className="author">
          <h4 className="ts header author_name">
            <img className="ts circular image" src="/Image/my_pic.png"/>
            <span className="content">
              Jessica Tseng
              <div className="sub header">{date}</div>
            </span>
          </h4>
          <span className="writing_type">{type}</span>
        </div>
      </div>
    );
  }
}

export default TitleIntro;
