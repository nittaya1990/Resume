import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Project(props: any) {
  const [showMore, setShowMore] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let modal = (
    <>
      <Box
        px={4}
        h={8}
        as="button"
        borderRadius="md"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        _hover={{
          bgGradient: "linear(to-r, #7928CA,#FF0080)",
        }}
        onClick={onOpen}
      >
        More
      </Box>
      <Modal
        scrollBehavior={"inside"}
        isCentered
        size={"6xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          color="white"
          bgGradient="linear(to-l, orange.100, purple.300)"
        >
          <ModalHeader>{props.project}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2">{props.info}</Box>
            {props.content}
          </ModalBody>

          <ModalFooter>
            <Box
              px={4}
              h={8}
              as="button"
              borderRadius="md"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              _hover={{
                bgGradient: "linear(to-r, #7928CA,#FF0080)",
              }}
              onClick={onClose}
            >
              Close
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
  return (
    <Box width="100%" color="white" rounded="lg" bg="#1b1b1b36" boxShadow="xl">
      <Container pt="4" fontWeight="bold">
        {props.project}
      </Container>
      <Container>{props.info}</Container>

      {showMore ? <></> : <Container p="4">{props.content}</Container>}

      {props.content ? (
        <>
          <Flex p="4">
            <Spacer />
            {modal}
          </Flex>
        </>
      ) : (
        <Box p="4"></Box>
      )}
    </Box>
  );
}
