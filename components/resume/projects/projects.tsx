import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import Project from "./projecttemplate";
import { projectData } from "./projectdata";
export default function Projects() {
  return (
    <>
      <Center textTransform="uppercase" fontWeight="bold" fontsize="64">
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Projects
        </Text>
      </Center>

      <Flex templateColumns="repeat(2, 1fr)" p={4} gap={6} color="white">
        {projectData.map((data) => {
          return <Project {...data} />;
        })}
      </Flex>
    </>
  );
}
