import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Image,
    Input,
    Link,
    Text,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
   import axios from "axios"
import { useNavigate } from "react-router-dom";
  
  const Signup = () => {

    const [userdata, setuserdata] = useState({
      firstname: "",
      lastname: "",
      password: "",
      phone: "",
      email: "",
    });
    const toast=useToast();
    const navigate=useNavigate()
    const HandleSubmit = (e) => {
e.preventDefault()
        axios.post(`http://localhost:4700/user/resistor`, userdata)
    .then(response => {
      toast({
        title: 'Account created',
        description: `${response.data.msg}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      localStorage.setItem("verified",response.data)
navigate("/login")
    })
    .catch(error => {
      toast({
        title: 'Error in creating account',
        description: `${error.response.data.msg}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

    })

    };
    const HandleChange = (e) => {
      let { value, name } = e.target;
      setuserdata({ ...userdata, [name]: value });
    };
    return (
      <Box m="auto" w={"600px"} mt="20px" shadow={"lg"}  borderRadius={"30px"}>
        <Heading textAlign={"left"} pl="10px" mx="10px">
          Signup
        </Heading>
        <HStack textAlign={"center"} w="50%" display={"flex"} m="auto">
          <Image
            w="30px"
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
            alt="cipher logo"
          />
  
          <Heading>Cipher Schools</Heading>
        </HStack>
        <Text fontWeight={"700"} fontSize={"20px"}>
          Create New Account
        </Text>
        <Text mb="30px">Please provide your valid informations to signup</Text>
  
        <Box m="auto">
          <form onSubmit={(e)=>HandleSubmit(e)}>
            <VStack spacing={4}>
              <FormControl w="400px">
                <FormLabel>First Name</FormLabel>
                <Input
                 boxShadow={"sm"}
                 h="50px"
                  type="text"
                  name="firstname"
                  value={userdata.firstname}
                  onChange={(e) => HandleChange(e)}
                  required
                />
              </FormControl>
              <FormControl w="400px">
                <FormLabel>Last Name</FormLabel>
                <Input
                 boxShadow={"sm"}
                 h="50px"
                  name="lastname"
                  type="text"
                  value={userdata.lastname}
                  onChange={(e) => HandleChange(e)}
                  required
                />
              </FormControl>
              <FormControl w="400px">
                <FormLabel>Phone (optional)</FormLabel>
                <Input
                 boxShadow={"sm"}
                 h="50px"
                  type="tel"
                  name="phone"
                  value={userdata.phone}
                  onChange={(e) => HandleChange(e)}
                />
              </FormControl>
              <FormControl w="400px">
                <FormLabel>Email</FormLabel>
                <Input
                 boxShadow={"sm"}
                 h="50px"
                  type="email"
                  name="email"
                  value={userdata.email}
                  onChange={(e) => HandleChange(e)}
                  required
                />
              </FormControl>
              <FormControl w="400px">
                <FormLabel>Password</FormLabel>
                <Input
                 boxShadow={"sm"}
                 h="50px"
                  type="password"
                  name="password"
                  value={userdata.password}
                  onChange={(e) => HandleChange(e)}
                  required
                />
              </FormControl>
              <Button
                color={"white"}
                mt="30px"
                w="400px"
                bgColor={"#f3912e"}
                type="submit"
                fontSize={"20px"}
                _hover={{ bgColor: "#f3912e" }}
              >
                Create Account
              </Button>
            </VStack>
          </form>
          <span>OR</span>
          <Divider m="auto" w="50%" />
          <HStack m="auto" py="10px" w="400px">
            <Text fontSize={"20px"}>Already have an account ?</Text>
            <Link href="/login" fontSize={"20px"} fontWeight={"600"} color="#f3912e">
              Signin Now
            </Link>
          </HStack>
        </Box>
      </Box>
    );
  };
  export default Signup;