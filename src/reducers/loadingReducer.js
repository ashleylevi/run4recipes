export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.bool
    default:
      return state
  }
}