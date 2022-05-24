import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({children}) =>{
  return(
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <NavLink to="/" className="font-bold text-5xl text-app-maroon font-dancing-script">MatLine</NavLink>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
          </div>
          <div>
            {children}
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header