import React from 'react';
import {connect} from 'react-redux';
import {confirmedSelection, deathSelection, recoveredSelection} from '../actions';

function SidebarBtn(props) {


  var recovered = 0;
  var death = 0;
  var total = 0;

  (function() {
    return props.covid.map(item => {
      total += item.TotalConfirmed
    })
  })();

  (function() {
    return props.covid.map(item => {
      recovered += item.TotalRecovered
    })
  })();

  (function() {
    return props.covid.map(item => {
      death += item.TotalDeaths
    })
  })();


  return (
    <div className="sidebtn-container">
      <div onClick={() => props.confirmedSelection()} className="sidebtn-container_box">
        <div className="sidebtn-container_box__first">
          Confirmed
          <span className="sidebtn-container_box__first-sub">{total}</span>
        </div>
      </div>
      <div onClick={() => props.deathSelection()} className="sidebtn-container_box">
        <div className="sidebtn-container_box__second">
          Deaths
          <span className="sidebtn-container_box__first-sub">{death}</span>
        </div>
      </div>
      <div onClick={() => props.recoveredSelection()} className="sidebtn-container_box">
        <div className="sidebtn-container_box__third">
          Recovered 
          <span className="sidebtn-container_box__first-sub">{recovered}</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    covid: state.covid
  }
}

export default connect(mapStateToProps, {confirmedSelection, recoveredSelection, deathSelection} )(SidebarBtn);
