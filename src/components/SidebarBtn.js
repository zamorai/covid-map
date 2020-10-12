import React from 'react';
import {connect} from 'react-redux';
import {confirmedSelection, deathSelection, recoveredSelection} from '../actions';

function SidebarBtn(props) {

  var recovered = 0;
  var death = 0;
  var total = 0;

  (function() {
    return props.covid.map(item => {
      return total += item.TotalConfirmed
    })
  })();

  (function() {
    return props.covid.map(item => {
      return recovered += item.TotalRecovered
    })
  })();

  (function() {
    return props.covid.map(item => {
      return death += item.TotalDeaths
    })
  })();

  return (
    <div className='sidebtn-container' >
      <div onClick={() => props.confirmedSelection()} className="sidebtn-container_box">
        <div className={`sidebtn-container_box__first ${props.section.style === 1 ? 'active' : ''}`}>
          Confirmed
          <span className="sidebtn-container_box__first-sub">{numberWithCommas(total)}</span>
        </div>
      </div>
      <div onClick={() => props.deathSelection()} className="sidebtn-container_box">
        <div className={`sidebtn-container_box__second ${props.section.style === 2 ? 'active' : ''}`}>
          Deaths
          <span className="sidebtn-container_box__first-sub">{numberWithCommas(death)}</span>
        </div>
      </div>
      <div onClick={() => props.recoveredSelection()} className="sidebtn-container_box">
        <div className={`sidebtn-container_box__third ${props.section.style === 3 ? 'active' : ''}`}>
          Recovered 
          <span className="sidebtn-container_box__first-sub">{numberWithCommas(recovered)}</span>
        </div>
      </div>
    </div> 
  )
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const mapStateToProps = (state) => {
  return {
    covid: state.covid,
    section: state.section
  }
}

export default connect(mapStateToProps, {confirmedSelection, recoveredSelection, deathSelection} )(SidebarBtn);
