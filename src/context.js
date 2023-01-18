import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  stories: [],
  query: "",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  let fetchStories = async(url)=>{
    dispatch({type:"SET_LOADING"})
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
      type: "SET_STORIES",
      payload: { stories: data.hits, nbPages: data.nbPages },
    })
  }
  
  let handleSearch = (query)=>{
    dispatch({type:"HANDLE_SEARCH",payload:query})
  }
  
  let removeStory = (id)=>{
    dispatch({type:"REMOVE_STORY",payload:id})
  }
  
  let handlePage = (value) => {
    dispatch({ type: "HANDLE_PAGE", payload: value })
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [state.query,state.page])
  

  return <AppContext.Provider value={{...state,handleSearch,removeStory,handlePage}}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
