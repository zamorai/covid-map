import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {signout} from '../../actions';

function Header(props) {

  var time = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="header-container">
      <div className="header-title">
        <img onClick={props.signout} className="header-title__image" src='./images/logo.png' alt="logo" />
      <div className="header-title__time">Last updated at {time}</div>
      </div>
    </div>
  
  )
}

export default connect(null, {signout})(Header);
