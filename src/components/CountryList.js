import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { countries } from '../actions';

import Country from './Country';

function CountryList(props) {

  useEffect(() => {
    props.countries();
  }, []);


  const renderedItems = () => {
    return props.covid.map(country => {
      return <Country name={country.Country} stat={props.section.section === 'confirmed' ? country.TotalConfirmed : props.section.section === 'death' ? country.TotalDeaths : country.TotalRecovered} /> 
    })
  }

  return (
    <div className="country-list"> 
      {renderedItems()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    covid: state.covid,
    section: state.section
  }
}


export default connect(mapStateToProps, {countries})(CountryList)


