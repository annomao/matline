import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(()=>{
    if(loading){
      return;
    }
    if(user){
      history.replace("/")
    }
  },[user,loading,history])

  const register = (e) => {
    e.preventDefault()
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form>
          <div className="mt-4">
            <label className="block" htmlFor="name">Full Name</label>
            <input type="text" placeholder="Full name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">Email</label>
            <input type="text" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          </div>
          <div className="flex items-baseline justify-between">
              <button onClick={register} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
              {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
          </div>
        </form>
    </div>
    </div>
  )
}
export default Register