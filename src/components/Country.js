import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function Country(props) {


  return (
    <div className="country-container">
      <div className="country-container__flag">
        <ReactCountryFlag className="country-container__flag-item" countryCode={props.code} svg />
      </div>
      <span className="country-container__name">
        {props.name.split('-').join(' ')}
      </span>
      <span className="country-container__stat">
        {numberWithCommas(props.stat)}
      </span>
    </div>
  )
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 