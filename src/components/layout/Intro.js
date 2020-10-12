import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions';

function Intro(props) {

  return (
    <div className='intro-container'>
      <button onClick = {() => props.signin()} className="intro-button">
        Hello there
      </button>
    </div>
  )
}



export default connect(null, {signin})(Intro);
