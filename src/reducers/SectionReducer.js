const initalState = {
  section: 'confirmed',
  style: 1
}

export default (state = initalState, action) => {

  switch(action.type) {
    case 'CONFIRMED':
      return {...state, section: 'confirmed', style: 1}
    case 'DEATH':
      return {...state, section: 'death', style: 2}
    case 'RECOVERED':
      return {...state, section: 'recovered', style: 3}
    default: 
    return state
  }
}