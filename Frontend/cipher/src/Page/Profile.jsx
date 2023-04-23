import React from 'react'
import Navbar from '../Components/Navbar'
import { Aboutme } from '../Components/Aboutme'
import Followers from './Followers'
import { Box } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import Interests from '../Components/Interests'
import Ontheweb from '../Components/Ontheweb'
import Password from '../Components/Password'
import Github  from '../Components/Github'


const Profile = () => {
  return (
    <div>
      <Navbar/>
      <Aboutme/>
      {/* <Github/> */}
      <Ontheweb/>
      <Password/>
      <Interests/>
      <Box display={{sm:"block",md:"none",base:"none"}}>
        <Footer/>
      </Box>
    </div>
  )
}

export default Profile
