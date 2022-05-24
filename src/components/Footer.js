import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () =>{
  return(
    <footer className="bg-app-maroon/75">
      <h2 className="text-center font-bold text-3xl p-2">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-black text-center md:text-left ">
        <div className="col-span-6 md:pl-16 pb-2">
          <h3 className="font-bold">MatLine Services</h3>
          <p><strong>Address:</strong> Nairobi,Latema Road</p>
          <p><strong>Email:</strong> matlineservices@example.com</p> 
          <p><strong>Phone:</strong> +254710000000</p> 
        </div>
        <div className="col-span-6 md:pl-16">
          <h3 className="font-bold">Social Media Links</h3>
          <FaFacebookF className="p-1 text-3xl inline md:block"/>
          <FaInstagram className="p-1 text-3xl inline md:block"/> 
          <FaTwitter className="p-1 text-3xl inline md:block"/>
        </div>
      </div>
    </footer>
  )
}
export default Footer