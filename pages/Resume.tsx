import React from "react";
import ReactPlayer from "react-player";
import { Flex, Box, Center } from "@chakra-ui/react"
import Projects from "../components/resume/projects";
import Experience from "../components/resume/experience";
import Skills from "../components/resume/skills";
import Education from "../components/resume/education";


export default function Resume() {
  return (
    <>
      <Box bgGradient=
        "linear(to-r, orange.100, purple.300)">
        <Center>
          <Flex templateColumns="repeat(2, 1fr)" p={4} gap={6}
            color="white">
            <Box id="lcol">
              <Experience />
            </Box>
            <Box id="rcol">
              <Skills />
              <Education />
            </Box>
          </Flex></Center>
        <Projects />
      </Box>
      <Box h={150} bgGradient=
        "linear(to-b, transparent, black)" />
      <Center h={150} bg="black" color="white" fontSize="xxx-large">Kineto Films Reel</Center>
      <Box bg="black">
        <ReactPlayer
          bg="black" muted
          playing
          loop
          controls
          height="100%"
          width="100%"
          url={
            "https://bafybeigfjiv4pjbrzfnmawqpm6h67skioy3uhzvujly6cfzw5mq6gf2b6a.ipfs.dweb.link/"
          }
        /></Box>
      <Box bg="black" h={50} />
    </>
  );
}
