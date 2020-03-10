const initialState = {
    xlist:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'XLIST':
    var newState = {...state};
    newState.xlist = action.data
    return newState

  default:
    return state
  }
}
