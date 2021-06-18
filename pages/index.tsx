import { Box, Center } from "@chakra-ui/react";
import Resume from "./Resume";
import Header from "../components/header/header";
import Navbar from "../components/header/navbar";
export default function Home() {
  return (
    <>
      <Box
        w="100%"
        minH="100vh"
        height="100%"
        bgGradient="linear(to-r, orange.100, purple.300)"
      >
        <Header />
        <Resume />
      </Box>
    </>
  );
}
