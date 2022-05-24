import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";

const HomeHeader = () =>{
  return(
    <Header>
      <NavLink to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 mr-4 lg:mt-0">
      LogIn
      </NavLink>
      <NavLink to="/register" className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 lg:mt-0">
      Sign Up</NavLink>
    </Header>
  )
}
export default HomeHeader