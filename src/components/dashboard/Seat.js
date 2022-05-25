import React from "react";

const Seat = ({label})=>{
  return(
    <button className="h-24 w-28 bg-app-maroon/90">
      {label}
    </button>
  )
}

export default Seat