import React from "react";
import { Grid, Wrap, WrapItem, Flex, Text, Center } from "@chakra-ui/react";
import Project from "./projecttemplate";
import { projectData } from "./projectdata";
export default function Projects() {
  return (
    <>
      <Center textTransform="uppercase" fontWeight="bold" fontsize="64">
        <Text
          p="4"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize={["2xl", "3xl"]}
          fontWeight=""
        >
          Projects
        </Text>
      </Center>
      <Center>
        <Wrap spacing="30px" align="center">
          <Center>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
            >
              {projectData.map((data) => {
                return (
                  <>
                    <WrapItem p="4">
                      <Project key={data.project} {...data} />
                    </WrapItem>
                  </>
                );
              })}
            </Grid>
          </Center>
        </Wrap>
      </Center>
    </>
  );
}
