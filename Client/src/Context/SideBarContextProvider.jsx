import React, { createContext, useState } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const SideBarContext=createContext(); 
function SideBarContextProvider({children}) {
    const [showSideBar,setShowSideBar]=useState(false);
    const handleShowSideBar=()=>{
        setShowSideBar(!showSideBar);
        console.log(showSideBar);
        
    }
  return (
    <SideBarContext.Provider value={{showSideBar,handleShowSideBar}}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarContextProvider