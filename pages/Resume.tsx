import React from "react";
import { Flex, Grid, Box, Center } from "@chakra-ui/react";
import Projects from "../components/resume/projects/projects";
import Experience from "../components/resume/experience";
import Skills from "../components/resume/skills";
import Education from "../components/resume/education";

export default function Resume() {
  return (
    <>
      <Box bgGradient="linear(to-r, orange.100, purple.300)">
        <Center>
          <Grid templateColumns="repeat(1, 1fr)" p={4} gap={6} color="white">
            <Experience />
            <Skills />
            <Education />
          </Grid>
        </Center>
        <Projects />
      </Box>
    </>
  );
}
