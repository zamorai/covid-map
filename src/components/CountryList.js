import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { countries } from '../actions';



import Country from './Country';

function CountryList(props) {



  useEffect(() => {
    if(props.covid.length === 0) {
      props.countries(); 
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const totalSorted = props.covid.sort(compare).reverse();
  const totalFiltered = totalSorted.filter(items => {
    return items.Slug.split('-').join(' ').toLowerCase().includes(props.search.toLowerCase());
  });



  const renderedItems = () => {
      return totalFiltered.map(country => {
        return (
          <div key={country.CountryCode}>
            <Country code={country.CountryCode} name={country.Slug} stat={props.section.section === 'confirmed' ? country.TotalConfirmed : props.section.section === 'death' ? country.TotalDeaths : country.TotalRecovered} /> 
          </div>
        ) 
      })
    } 
  

  return (
    <div className="country-list"> 
      {renderedItems()}
    </div>
  )
}

function compare(a, b) {
  if (a.TotalConfirmed < b.TotalConfirmed) {
    return -1;
  }
  if (a.TotalConfirmed > b.TotalConfirmed) {
    return 1;
  }
  if (a.TotalDeaths < b.TotalDeaths) {
    return -1;
  }
  if (a.TotalDeaths > b.TotalDeaths) {
    return 1;
  }
  if (a.TotalRecovered < b.TotalRecovered) {
    return -1;
  }
  if (a.TotalRecovered > b.TotalRecovered) {
    return 1;
  }
  return 0;
}



const mapStateToProps = (state) => {
  return {
    covid: state.covid,
    section: state.section,
    search: state.search
  }
}


export default connect(mapStateToProps, {countries})(CountryList)


