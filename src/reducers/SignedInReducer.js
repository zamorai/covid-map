const initialState = {
  signedIn: false
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'SIGN_IN':
      return {...state, signedIn: true}
    default: 
    return state
  }

}