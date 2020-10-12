
export default (state = [], action) => {

  switch(action.type) {
    case 'GET_COVID':
      return [...state, ...action.payload]
    default: 
      return state
  }
}