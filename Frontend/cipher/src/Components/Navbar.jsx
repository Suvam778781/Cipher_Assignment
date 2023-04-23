import bell from "../Alllogo/bell.png";
import filter from "../Alllogo/filter.png";
import {
  HStack,
  InputGroup,
  InputLeftElement,
  Image,
  Text,
  Input,
  Flex,
  Textarea,
  Button,
  Editable,
  InputRightElement,
  Box,
  Tooltip,
  Switch,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import Userdetails from "./Userdetails";
const Navbar = () => {

  return (
    <div style={{zIndex:"100",width:"100%",marginBottom:"100px",top:"0",left:"0",right:"0",position:"fixed",backgroundColor:"#ffffff"}}>
      <HStack
       zIndex={100}
        px="26px"
        shadow={"md"}
        py="10px"
        alignItems={"center"}
        verticalAlign={"center"}
        justifyContent={"space-between"}
      >
        <Flex>
          <Image
          
            id="cipher_logo"
            width={"30px"}
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
            alt="cipher logo"
          />
          <Text zIndex={1} fontWeight={"600"} ml="10px">
            Cipher Schools
          </Text>
        </Flex>
        <HStack display={{sm:"none",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}}>
          <InputGroup
            size={"sm"}
            backgroundColor={"initial"}
            rounded={"50px"}
            w="300px"
          >
            <InputLeftElement children={<SearchIcon color="gray.300" />} />
            <Input
              borderRadius={"200px"}
              type="text"
              backgroundColor={"initial"}
              placeholder="Search and Learn"
            />
            <InputRightElement
              children={<Image h="17px" src={filter} alt="filter logo" />}
            />
          </InputGroup>
          <HStack>
            <Box className="profile">
              <Box
                w="25px"
                borderRadius={"50%"}
                backgroundColor={"red.300"}
                h="25px"
              ></Box>
            </Box>
            <Box
              pr="15px"
              className="notification"
              alignItems={"center"}
              margin={"auto"}
              display={"flex"}
            >
              <Text
                position={"relative"}
                px="3px"
                m="auto"
                color={"white"}
                bgColor={"#f3912e"}
                textAlign={"center"}
                top="-3"
                borderRadius={"3px"}
                right="-8"
              >
                0
              </Text>
              <Tooltip label="Notification">
                <Image w="20px" src={bell} alt="bell logo" />
              </Tooltip>
            </Box>
            <Tooltip label="Cipher Points">
            <Box className="cipher_points" display={"flex"} px="10px">
              <Image
                src={
                  "https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
                }
                alt="cipher points"
              />
              <Text
                px="3px"
                m="auto"
                color={"#f3912e"}
                textAlign={"center"}
                top="-3"
                borderRadius={"3px"}
                right="-8"
                fontWeight={700}
                fontSize={"20px"}
              >
                0
              </Text>
            </Box>
            </Tooltip>
            <Box className="theme_changer">
              <Tooltip label="Change Theme">
                <Box>
                  <Switch colorScheme="yellow" />
                </Box>
              </Tooltip>
            </Box>
          </HStack>
        </HStack>
      </HStack>

      <Userdetails/>
    </div>
  );
};
export default Navbar;
