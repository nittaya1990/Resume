import React from "react";
import { Flex, Box, Center } from "@chakra-ui/react";
import Projects from "../components/resume/projects/projects";
import Experience from "../components/resume/experience";
import Skills from "../components/resume/skills";
import Education from "../components/resume/education";

export default function Resume() {
  return (
    <>
      <Box bgGradient="linear(to-r, orange.100, purple.300)">
        <Center>
          <Flex templateColumns="repeat(2, 1fr)" p={4} gap={6} color="white">
            <Box id="lcol">
              <Experience />
            </Box>
            <Box id="rcol">
              <Skills />
              <Education />
            </Box>
          </Flex>
        </Center>
        <Projects />
      </Box>
    </>
  );
}
