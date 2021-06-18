import React from "react";
import { Box, Text, Flex, Spacer, Center } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Social from "../social/Social";

export default function Header() {
  return (
    <>
      <Center width="100%" bg="black" color="white">
        <Flex>
          <Center>
            <Text
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontSize={["2xl", "4xl"]}
              fontWeight="bold"
              textAlign="center"
              p="4"
            >
              Cole Cramer
            </Text>
          </Center>
          <Flex p="4">
            <Center>
              <Social />
            </Center>{" "}
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
