const defaultState = {
  isLogin: false
}

export default (state = defaultState,action)=>{
  switch(action.type) {
    case 'loginChange' : 
      const newState = JSON.parse(JSON.stringify(state))
      newState.isLogin = action.value
      return newState
      break
  }
  return state
}