import React from "react";

const Header = () =>{
  return(
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-bold text-5xl text-app-maroon font-dancing-script">MatLine</span>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
          </div>
          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 mr-4 lg:mt-0">
              Sign Up
            </button>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-app-maroon border-app-maroon hover:border-transparent hover:text-app-maroon hover:bg-white mt-4 lg:mt-0">
              LogIn</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header