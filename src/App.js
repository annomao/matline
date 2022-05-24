import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './components/home/Home';
import Register from './components/home/Register';
import DashBoard from './components/dashboard/DashBoard';
import LogIn from './components/home/LogIn'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/dashboard" element={<DashBoard/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
