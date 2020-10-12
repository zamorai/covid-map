import React from 'react';
import moment from 'moment';

export default function Header() {

  var time = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="header-title">
      <img className="header-title__image" src='./images/logo.png' alt="logo" />
      <div className="header-title__time">{time}</div>
    </div>
  )
}
