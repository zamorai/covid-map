import React, { useState } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions'

export const Search = (props) => {
  const[term, setTerm] = useState('')

  const onTermChange = (event) => {
    props.search(event.target.value);
    setTerm(event.target.value)
  }

  return (
    <div>
      <form>
        <input className="search-bar" type='search' placeholder="Search..." value={term} onChange={onTermChange} />
      </form>
    </div>
  )
}


export default connect(null, {search})(Search)
