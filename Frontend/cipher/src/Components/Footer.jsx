import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

import user from "../Alllogo/user.png";
import trend from "../Alllogo/trend.png";
import education from "../Alllogo/education.png";
import home from "../Alllogo/home.png";
const Footer = () => {
  return (
    <Box 
    zIndex={100}
      position="fixed"
      bottom="10px"
      left="10px"
      right="10px"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      borderRadius={"20px"}
      padding="5px"
      bg="white"
      p={"14px"}
      mx="20px"
      mb="10px"
    >
      <Flex
        w="90%"
        margin="auto"
        justify={"space-between"}
        textAlign={"center"}
      >
        <Box>
          <Image h="30px" m="auto" src={home} alt="home logo" />
          <Text fontWeight={"700"} fontSize={"18px"}>
            Home
          </Text>
        </Box>
        <Box>
          <Image h="30px" m="auto" src={education} alt="course logo" />
          <Text fontWeight={"700"} fontSize={"18px"}>
            Courses
          </Text>
        </Box>
        <Box>
          <Image h="30px" m="auto" src={trend} alt="trending logo" />
          <Text fontWeight={"700"} fontSize={"18px"}>
            Trending
          </Text>
        </Box>
        <Box>
          <Image h="30px" m="auto" src={user} alt="my profile logo" />
          <Text fontWeight={"700"} fontSize={"18px"}>
            My Profile
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
