import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Loginmodal from './Components/Loginmodal';
import Navbar from './Components/Navbar';
import Password from './Components/Password';
import Interests from './Components/Interests';
import Ontheweb from './Components/Ontheweb';
import Followers from './Page/Followers';
import { Divider } from '@chakra-ui/react';
import { Aboutme } from './Components/Aboutme';
import Userdetails from './Components/Userdetails';
import Footer from './Components/Footer';
import { Signin } from './Page/Login';
import Signup from './Page/Signup';
import Allroutes from './Allroutes/Allroutes';
function App() {

  return (
    <div className="App" >
      {/* <Navbar/>
      <Aboutme/>
     <Password/>
     <Ontheweb/>
     <Interests/>
     <Followers/>
     <Footer/> */}
     {/* <Login/> */}
     {/* <Signup/> */}
     <Allroutes/>
    </div>
  );
}
export default App;