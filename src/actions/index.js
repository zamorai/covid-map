import axios from 'axios';

export const countries = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.covid19api.com/summary');

    dispatch({
      type: 'GET_COVID',
      payload: response.data.Countries
    })
  }
}

export const signin = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const signout = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const confirmedSelection = () => {
  return {
    type: "CONFIRMED"
  }
}
export const deathSelection = () => {
  return {
    type: "DEATH"
  }
}
export const recoveredSelection = () => {
  return {
    type: "RECOVERED"
  }
}

export const search = (term) => {
  return {
    type: 'SEARCH',
    payload: term
  }
}