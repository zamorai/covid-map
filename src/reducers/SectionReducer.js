const initalState = {
  section: 'confirmed'
}

export default (state = initalState, action) => {

  switch(action.type) {
    case 'CONFIRMED':
      return {...state, section: 'confirmed'}
    case 'DEATH':
      return {...state, section: 'death'}
    case 'RECOVERED':
      return {...state, section: 'recovered'}
    default: 
    return state
  }
}