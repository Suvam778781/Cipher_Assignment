import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  useDisclosure,
  Box,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
const Password = () => {
const {isOpen,onClose,onOpen}=useDisclosure()
  const [state,setstate]=useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,serterror]=useState({error:false,details:""})


  const handleSave = () => {
    onClose();
  };
  return (

<Box w="95%" m="auto" >
<Box>
<HStack justifyContent={"space-between"} display={"flex"} my="20px">
<Heading fontWeight={"600"}>PASSWORD</Heading>
<Button onClick={()=>{setstate(!state);onOpen()}} w="90px" color={"white"} bgColor={"#f3912e"} _hover={{bgColor:"#f3912e"}}>{state?"Save":"Change"}</Button>
</HStack>
<Input readOnly="true" placeholder={"**********"}/>
</Box>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter width={"40%"} display={"flex"} m="auto" justifyContent={"space-between"} alignItems={"flex-end"}>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleSave}
            isDisabled={!currentPassword || !newPassword || newPassword !== confirmPassword}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent> 
    </Modal>
    <Divider  my="30px"/>
    </Box>
  );
};

export default Password;
