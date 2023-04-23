import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Interests() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setstate] = useState(false);
  let data = [
    "App Devlopment",
    "Game Devlopment",
    "Data Structure",
    "Web Development",
    "Machine Learning",
    "Programing",
    "Data Science",
    "Others",
  ];
  let set = new Set();

  const saveData = (ele) => {};
  return (
    <Box mb="100px">
      <HStack
        justifyContent={"space-between"}
        w="95%"
        display={"flex"}
        py="20px"
        m="auto"
      >
        <Heading fontWeight={"600"}>INTEREST</Heading>
        <Button
          onClick={() => {
            setstate(!state);
            onOpen();
          }}
          bgColor={"#f3912e"}
          _hover={{ bgColor: "#f3912e" }}
          color={"white"}
          w="90px"
        >
          {state ? "Save" : "Edit"}
        </Button>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={2}>
              {data.map((ele) => (
                <Button>{ele}</Button>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              color={"white"}
              bgColor={"#f3912e"}
              _hover={{ bgColor: "#f3912e" }}
              variant="ghost"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider  my="30px"/>
    </Box>
  );
}
export default Interests;
