import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";

const DashHeader = ({logout}) => {
  return(
    <Header>
    <NavLink to="/book" className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 mr-4 lg:mt-0">
    BOOK
    </NavLink>
    <NavLink to="/details" className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 mr-4 lg:mt-0">
    Details
    </NavLink>
    <button onClick={logout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 lg:mt-0">
    LogOut</button>
    </Header>
  )
}

export default DashHeader