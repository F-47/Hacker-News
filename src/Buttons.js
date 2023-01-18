import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  if(isLoading){
    return <div className="isloading"></div>
  }
  return <div className="paginationBtns">
      <button onClick={()=>handlePage('dec')}>prev</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={()=>handlePage('inc')}>next</button>
    </div>
  
};

export default Buttons;
