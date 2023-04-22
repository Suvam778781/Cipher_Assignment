import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const Followers = ({ id, name, image, price, category }) => {
    return (
      <Box >
        <Card maxW="sm" mt="1rem" bg="#1A365D">
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/107548299?v=4"
              borderRadius="50%"
             w="50%"
              objectFit="cover"
              margin="auto"
            />
            <Stack mt="3" spacing="1">
              <Heading size="md" color="white">*** Adarsh</Heading>
              <Text color="blue.700">college student</Text>
            
            </Stack>
          </CardBody>
  
              <Button variant="ghost" colorScheme="black" bg="yellow.600"  mb="6px" ml="5px" mr="5px" >
              Follow
              </Button>
        
        </Card>
      </Box>
    );
  };
  
  export default Followers;