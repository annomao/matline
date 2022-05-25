import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HomeHeader from "./HomeHeader";

const LogIn = () => {
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  if(loading){
    return (
      <div>
        <p>Initialising</p>
      </div>
    );
  }
  if(error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if(user){
    navigate("/dashboard")
  }

  const login = (e) => {
    e.preventDefault()
    if (!email) alert("Please enter Email");
    logInWithEmailAndPassword(email, password);
  };

  return(
    <>
    <HomeHeader/>
    <div className="flex justify-center">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-center text-app-maroon">Login to your account</h3>
        <form>
          <div className="mt-4">
            <label className="block text-app-maroon" htmlFor="email">Email</label>
            <input type="text" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-app-maroon"/>
          </div>
          <div className="mt-4">
            <label className="block text-app-maroon">Password</label>
            <input type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-app-maroon"/>
          </div>
          <div className="flex items-baseline justify-between">
              <button onClick={login} className="px-6 py-2 mt-4 text-white bg-app-maroon/90 rounded-lg hover:bg-app-maroon">Login</button>
              {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}              
          </div>
        </form>
    </div>
    </div>
    </>
  )
}
export default LogIn