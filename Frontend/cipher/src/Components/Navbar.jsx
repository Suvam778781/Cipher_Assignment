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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
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
const colors={bgColor:"#f3912e",bgColor2:"#757575"}
    const [state,setstate]=useState(false)
return(
<Box w="95%" m="auto">
<Flex justifyContent={"space-between"} textAlign={"center"} h="60px" alignItems={"center"} >
<Text fontWeight={"600"}> ABOUT ME</Text>
<Button bgColor={colors.bgColor}  px="22px" h="28px" color={"white"} borderRadius={"5px"} onClick={()=>setstate(!state)}>{state===false?"Edit":"Save"}</Button>
</Flex>
<InputGroup>
    <Textarea h="120px" shadow={"sm"} isReadOnly={!state} _active={{border:"none"}} _focus={{border:"none"}}  placeholder="Add something about You.">somejjbjjn</Textarea>
    <InputRightElement children={<Editable color='green.500' />} />
  </InputGroup>
</Box>
)
}
export {Aboutme};