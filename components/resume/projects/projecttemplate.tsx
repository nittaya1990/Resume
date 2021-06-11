import React from "react";
import { Box, Container } from "@chakra-ui/react";

export default function Project(props: any) {
  return (
    <Box color="white" rounded="lg" bg="#7979793b" m="2" p={2}>
      <Container pt="4" fontWeight="bold">
        {props.project}
      </Container>
      <Container pl="4">{props.info}</Container>
      <Container p="4">{props.content}</Container>
    </Box>
  );
}
