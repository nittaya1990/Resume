import React, { useState } from "react";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

export default function Project(props: any) {
  const [showMore, setShowMore] = useState(true);
  return (
    <Box width="100%" color="white" rounded="lg" bg="#7979793b">
      <Container pt="4" fontWeight="bold">
        {props.project}
      </Container>
      <Container>{props.info}</Container>
      {showMore ? <></> : <Container p="4">{props.content}</Container>}

      {props.content ? (
        <>
          <Flex p="4">
            <Spacer />
            <Box
              px={4}
              h={8}
              as="button"
              borderRadius="md"
              bg="#F90183"
              _hover={{
                background: "#8B23C1",
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? `More` : `Less`}
            </Box>
          </Flex>
        </>
      ) : (
        <Box p="4"></Box>
      )}
    </Box>
  );
}
