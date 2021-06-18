import React from "react";
import { Box, Text, Container, Center } from "@chakra-ui/react";

export default function Education() {
  return (
    <>
      <Box color="white">
        <Center textTransform="uppercase" fontWeight="bold" fontsize="64">
          <Text
            p="4"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize={["2xl", "3xl"]}
            fontWeight="extraold"
          >
            Education
          </Text>
        </Center>
        <Center>
          <Container rounded="lg" bg="#7979793b" m="2" p={2}>
            <Text pl={4}>
              Manufacturing Engineering Technology CAD/CAM (ABET)
            </Text>
            <Text pl="4">Bachelor of Science</Text>

            <Text pl="4">
              Western Washington University, Bellingham, WA 2014
            </Text>
          </Container>
        </Center>
      </Box>
    </>
  );
}
