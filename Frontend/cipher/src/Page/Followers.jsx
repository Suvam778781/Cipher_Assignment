import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Grid,
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
const Followers = ({ id, name="", image="",followers="0" }) => {
  return (
    <Box w="95%" m="auto">
      <Text my="30px" fontWeight={600} fontSize={"24px"} textAlign={"left"}>
        Users Following You
      </Text>
      <Grid
        h="700px"
        m="auto"
        templateColumns={{ sm: "repeat(4,1fr)", base: "repeat(7,1fr)" }}
      >
        <Card
          maxW="240px"
          h="260px"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          mt="1rem"
          bg="white"
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/107548299?v=4"
              borderRadius="50%"
              w="80px"
              objectFit="cover"
              margin="auto"
            />
            <Stack mt="3" spacing="1" textAlign={"left"}>
              <Heading size="sm" color="black">
                {name}
              </Heading>
              <Text fontSize={"16px"}>college student</Text>
              <Text>{followers} Followers</Text>
            </Stack>
          </CardBody>
          <Button
            variant="ghost"
            color="white"
            _hover={{ color: "rgb(12 22 22)" }}
            bgColor="rgb(12 22 22)"
            m="0px 10px 10px 10px"
          >
            Follow
          </Button>
        </Card>
      </Grid>
    </Box>
  );
};

export default Followers;
