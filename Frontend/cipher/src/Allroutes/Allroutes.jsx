import React from 'react'
import { Signin } from '../Page/Login'
import Signup from '../Page/Signup'
import Profile from '../Page/Profile'
import {Route,Routes} from "react-router-dom"
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Signin/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route  path="/" element={<Profile/>} />
    </Routes>
  )
}
export default Allroutes


