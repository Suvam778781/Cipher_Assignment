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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <div>
      <HStack px="16px" shadow={"md"} py="10px">
        <Flex width={"30%"}>
          <Image
            id="cipher_logo"
            width={"30px"}
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
            alt="cipher logo"
          />
          <Text fontWeight={"600"} ml="10px">
            Cipher Schools
          </Text>
        </Flex>
        <InputGroup borderRadius={"40%"} w="30%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            borderLeftRadius={"20%"}
            type="text"
            backgroundColor={"initial"}
            placeholder="Search and Learn"
          />
        </InputGroup>
        <HStack>
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;


const Aboutme=()=>{
    const [state,setstate]=useState(false)

return(
<>
<Flex>
<Text> ABOUT ME</Text>
<Button>Edit</Button>
</Flex>
<Textarea placeholder="Add something about You."></Textarea>
</>
) 

}
export {Aboutme};