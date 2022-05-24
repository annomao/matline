import React from "react";

const TestimonialCard = ({image,name,text}) => {
  return(
    <div className="rounded shadow-2xl w-56">
    <img className="object-cover h-48 w-56" src={image} alt=""/>
    <span className="py-3 pl-2 font-thin leading-3 poppins">{name}</span>
    <p className="p-3 text-sm">{text}</p>
    </div>
  )
}

export default TestimonialCard