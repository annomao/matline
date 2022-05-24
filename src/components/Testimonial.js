import React from "react";
import man0 from "../images/man0.jpg"
import man1 from "../images/man1.jpg"
import man2 from "../images/man2.jpg"
import man3 from "../images/man3.jpg"
import TestimonialCard from "./TestimonialCard";

const Testimonial = () =>{
  const images = [

  ]
  return(
    <section className="my-10 mx-8">
    <h1 className="font-bold text-4xl text-app-maroon/90 poppins mb-10 text-center">Testimonials</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-10">
      <TestimonialCard image={man0} name="John" text="Best service. Convinient and efficient" />
      <TestimonialCard image={man1} name="Ofweneke" text="Best service. Convinient and efficient" />
      <TestimonialCard image={man2} name="Talia" text="Best service. Convinient and efficient" />
      <TestimonialCard image={man3} name="Oscar" text="Best service. Convinient and efficient" />
    </div>
    </section>
  )
}
export default Testimonial