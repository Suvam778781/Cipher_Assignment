import { EditIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, InputGroup, InputRightElement, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Aboutme = () => {
    const colors = { bgColor: "#f3912e", bgColor2: "#757575" };
    const [state, setstate] = useState(false);
    return (
      <Box w="95%" m="auto" zIndex={1} mt="200px">
        <Flex
          justifyContent={"space-between"}
          textAlign={"center"}
          h="60px"
          alignItems={"center"}
        >
          <Heading fontWeight={"600"}> ABOUT ME</Heading>
          <Button
            bgColor={colors.bgColor}
            px="22px"
            h="28px"
            color={"white"}
            borderRadius={"5px"}
            onClick={() => setstate(!state)}
          >
            {state === false ? "Edit" : "Save"}
          </Button>
        </Flex>
        <InputGroup>
          <Textarea
            h="120px"
            shadow={"sm"}
            isReadOnly={!state}
            _active={{ border: "none" }}
            _focus={{ border: "none" }}
            placeholder="Add something about You."
          >
        {""}
          </Textarea>
         {state? <InputRightElement children={<EditIcon />} />:""}
        </InputGroup>
      </Box>
    );
  };

  export { Aboutme };