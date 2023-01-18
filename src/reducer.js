const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_STORIES":
      return {
        ...state,
        isLoading: false,
        stories: action.payload.stories,
        nbPages: action.payload.nbPages,
      };
    case "HANDLE_SEARCH":
      return { ...state, query: action.payload, page: 0 };
    case "REMOVE_STORY":
      return {
        ...state,
        stories: state.stories.filter((story) => story.objectID !== action.payload),
      };
    case "HANDLE_PAGE":
      if (action.payload === 'inc') {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1
        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }
        return { ...state, page: prevPage }
      }break;
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
