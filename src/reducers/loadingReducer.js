export const loadingReducer = (state = false, action) => {
  console.log('yoo')
  switch (action.type) {
    case 'LOADING':
    console.log('true')
      return action.bool
    default:
    console.log('false')
      return state
  }
}