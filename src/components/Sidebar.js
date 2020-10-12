import React from 'react';
import {connect} from 'react-redux';
import { countries } from '../actions';
import SidebarBtn from './SidebarBtn';
import CountryList from './CountryList';

function Sidebar(props) {



  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <SidebarBtn />
        <CountryList />
      </div>
    </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    covidData: state.covid
  }
}

export default connect(mapStateToProps, {countries})(Sidebar)
