import React,{useEffect, useState} from "react";

const Seat = ({label,addSeat,value})=>{
  const[disable,setDisable] = useState(value)
  
  useEffect(()=>{
    setDisable(value)
  },[value])

  const enabledClassName = "h-24 w-28 bg-app-maroon/90"
  const disabledClassName = "h-24 w-28 bg-app-maroon/50"

  const handleClick = (e)=> {
    e.preventDefault()
    addSeat(e.target.textContent)
    setDisable((disable)=> !disable)
  }
  return(
    <button className={disable? disabledClassName: enabledClassName }
    onClick={handleClick } disabled={disable}>
      {label}
    </button>
  )
}

export default Seat