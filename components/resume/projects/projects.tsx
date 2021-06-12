import React from "react";
import { Wrap, WrapItem, Flex, Text, Center } from "@chakra-ui/react";
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
      <Wrap>
        {projectData.map((data) => {
          return (
            <>
              <WrapItem>
                <Project key={data.project} {...data} />
              </WrapItem>
            </>
          );
        })}
      </Wrap>
    </>
  );
}
