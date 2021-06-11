import React from "react";
import { Center, Box } from "@chakra-ui/layout";
import ReactPlayer from "react-player";

export default function Kineto() {
  return (
    <>
      <Center h={150} bg="black" color="white" fontSize="xxx-large">
        Kineto Films Reel
      </Center>
      <Box bg="black">
        <ReactPlayer
          bg="black"
          muted
          playing
          loop
          controls
          height="100%"
          width="100%"
          url={
            "https://bafybeigfjiv4pjbrzfnmawqpm6h67skioy3uhzvujly6cfzw5mq6gf2b6a.ipfs.dweb.link/"
          }
        />
      </Box>
      <Box bg="black" h={50} />
    </>
  );
}
