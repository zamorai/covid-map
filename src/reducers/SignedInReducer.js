const initialState = {
  signedIn: true
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'SIGN_IN':
      return {...state, signedIn: true}
    case 'SIGN_OUT':
      return {...state, signedIn: false}
    default: 
    return state
  }

}