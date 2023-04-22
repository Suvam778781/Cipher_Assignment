import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Loginmodal from './Components/Loginmodal';
import Navbar, { Aboutme } from './Components/Navbar';
function App() {

  return (
    <div className="App" >
      <Navbar/>
     {/* <Loginmodal/> */}
     <Aboutme/>
    </div>
  );
}

export default App;
