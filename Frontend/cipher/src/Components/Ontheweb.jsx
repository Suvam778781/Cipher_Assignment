import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import github from "../Alllogo/github.png";
import facebook from "../Alllogo/facebook-app-symbol.png";
import linkedin from "../Alllogo/linkedin-logo.png";
import globe from "../Alllogo/globe.png";
import instagram from "../Alllogo/instagram.png";
import twiter from "../Alllogo/twitter-sign.png";
import { EditIcon } from "@chakra-ui/icons";
const Ontheweb = () => {
  const [social_urlm, setsocial_url] = useState();
  const [state,setstate]=useState(false)
  let social_url = {
    linkedin: "",
    github: "",
    twiter: "",
    facebook: "",
    website: "",
    instagram: "",
  };

  const handleChange = (e) => {};

  const handleSubmit = () => {};

  return (

    <Box  my="20px" w="95%" m="auto">
    <HStack justifyContent={"space-between"} display={"flex"} my="20px">
<Heading fontWeight={"600"}>ON THE WEB</Heading>
<Button onClick={()=>{setstate(!state)}} w="90px" color={"white"} bgColor={"#f3912e"} _hover={{bgColor:"#f3912e"}}>{state?"Save":"Change"}</Button>
</HStack>
    <Grid templateColumns={{md:"repeat(2,1fr)",sm:"repeat(1,1fr)"}} gap="3" >
      <GridItem>
        <InputGroup shadow={"sm"}>
          <InputLeftElement
            children={<Image w="20px" filter={"invert(.5)"} src={linkedin} alt="linkedin logo" />}
          />
          <Input
                isReadOnly={!state}
                _active={{border:"none"}}
                _hover={{border:"none"}}
                _after={{border:"none"}}
                _focus={{border:"none"}}
                _before={{border:"none"}}
            onChange={(e) => handleChange(e)}
            name="linkedin"
            placeholder="Linkedin"
          />
          {state ? <InputRightElement children={<EditIcon />} /> : ""}
        </InputGroup>
      </GridItem>
      <GridItem>
        <InputGroup shadow={"sm"}>
          <InputLeftElement
            children={<Image w="20px" filter={"invert(.5)"} src={github} alt="github logo" />}
          />

          <Input
                isReadOnly={!state}
                _active={{border:"none"}}
                _hover={{border:"none"}}
                _after={{border:"none"}}
                _focus={{border:"none"}}
            onChange={(e) => handleChange(e)}
            name="github"
            placeholder="Github"
          />
          {state ? <InputRightElement children={<EditIcon />} /> : ""}
        </InputGroup>
      </GridItem>
      <GridItem>
        <InputGroup shadow={"sm"}>
          <InputLeftElement
            children={<Image w="20px" filter={"invert(.5)"} src={facebook} alt="facebook logo" />}
          />
          <Input
                isReadOnly={!state}
                _active={{border:"none"}}
                _hover={{border:"none"}}
                _after={{border:"none"}}
                _focus={{border:"none"}}
            onChange={(e) => handleChange(e)}
            name="facebook"
            placeholder="Facebook"
          />
          {state ? <InputRightElement children={<EditIcon />} /> : ""}
        </InputGroup>
      </GridItem>
      <InputGroup shadow={"sm"}>
        <InputLeftElement children={<Image w="20px" filter={"invert(.5)"} src={twiter} alt="twiter logo" />} />
        <Input
             isReadOnly={!state}
             _active={{border:"none"}}
             _hover={{border:"none"}}
             _after={{border:"none"}}
             _focus={{border:"none"}}
          onChange={(e) => handleChange(e)}
          name="twiter"
          placeholder="Twiter"
        />
        {state ? <InputRightElement children={<EditIcon />} /> : ""}
      </InputGroup>
      <GridItem>
        <InputGroup shadow={"sm"}>
          <InputLeftElement
            children={<Image w="20px" filter={"invert(.5)"} src={instagram} alt="instagram logo" />}
          />
          <Input
          
           isReadOnly={!state}
           _active={{border:"none"}}
           _hover={{border:"none"}}
           _after={{border:"none"}}
           _focus={{border:"none"}}
            onChange={(e) => handleChange(e)}
            name="instagram"
            placeholder="Instagram"
          />
          {state ? <InputRightElement children={<EditIcon />} /> : ""}
        </InputGroup>
      </GridItem>
      <GridItem>
        <InputGroup shadow={"sm"}>
          <InputLeftElement
            children={<Image w="20px" filter={"invert(.5)"} src={globe} alt="website logo" />}
          />
          <Input
           isReadOnly={!state}
           _active={{border:"none"}}
           _hover={{border:"none"}}
           _after={{border:"none"}}
           _focus={{border:"none"}}
        
            onChange={(e) => handleChange(e)}
            name="website"
            placeholder="Your Website"
          />
          {state ? <InputRightElement children={<EditIcon />} /> : ""}
        </InputGroup>
      </GridItem>
    </Grid>
    <Divider  my="30px"/>
    </Box>
  );
};

export default Ontheweb;
