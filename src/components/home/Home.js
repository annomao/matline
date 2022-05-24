import React from "react";
import About from "./About";
import Footer from "../Footer";
import Testimonial from "./Testimonial";
import HomeHeader from "./HomeHeader";

const Home = () =>{
  return(
    <>
    <HomeHeader/>
    <About/>
    <Testimonial/>
    <Footer/>
    </>
  )
}
export default Home