import { EditIcon } from '@chakra-ui/icons'
import { Avatar, Box, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const Userdetails = ({name="Suvam Panda",email="Suvampandar@gmail.com"}) => {
  return (
    <Box px="30px" py="60px" alignItems={"center"} h="100px" display={"flex"} w="100%" opacity={"0.9"} bgImage={"https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png"}>
<VStack>
<Avatar size={"lg"} />
<EditIcon/>
</VStack>
<VStack  alignItems={"flex-start"}  ml="20px">
<Text  fontWeight={400} color={"gray.7  00"} fontSize={"20px"}>
Hello
</Text>
<Heading fontSize={"20px"}>
{name}
</Heading>
<Text fontWeight={400} color={"gray.7  00"} fontSize={"20px"}>
{email}
</Text>
</VStack>
    </Box>
  )
}

export default Userdetails
