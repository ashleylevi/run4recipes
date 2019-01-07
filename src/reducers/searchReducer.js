export const searchReducer = (state= '', action) => {
  switch (action.type) {
    case "SEARCH_RECIPES":
      return action.searchValue
    default:
      return state
  }
}