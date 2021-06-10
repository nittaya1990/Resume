import React from "react";
import ReactPlayer from "react-player";
import { FaInstagram, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import { Wrap, WrapItem, Spacer, Grid,Stack, Image, Link, Flex, Text, Box, Container, Center} from "@chakra-ui/react"

import { AspectRatio } from "@chakra-ui/react"

export default function Resume() {
  return (
    <>
<Box bgGradient=
    "linear(to-r, orange.100, purple.300)">
<Flex templateColumns="repeat(2, 1fr)" p={4} gap={6}  
   color="white">
        
        

<Box id="lcol">
  <Center       textTransform="uppercase"
 fontWeight="bold"   fontsize="64" ><Text
 bgGradient="linear(to-l, #7928CA,#FF0080)"
 bgClip="text"
 fontSize="2xl"
 fontWeight="extrabold"
>
Work Experience
</Text></Center>

  <Box rounded='lg'  bg="#7979793b" m="2" p={2}>
<Container fontWeight="bold">Kineto Films, Co-owner CEO:</Container>
<Text pl="4">Jan 2017 – March 2020</Text>
<Text color="white" pl="4" w={400}>
Kineto Films specialized in high quality video, content 
marketing and storytelling. It helped its clients grow and
thrive in a social media connected world.
</Text>
</Box>
<Box rounded='lg'  bg="#7979793b" m="2" p={4}>
<Container fontWeight="bold"> Polyform US, Manufacturing </Container>
<Text pl="4">Engineer: March 2015 – Dec 2017</Text>
<Container pl="4" w={500}>
Created complex kinematic assemblies of rotomolding machines.
Designed a new production line that included oversight for the
entire project. Managed multiple projects for instance a
factory-wide IoT system, with custom hardware and sensors to
gain unique production insight.
</Container>
</Box>


</Box>

<Box  id="rcol">

  <Center       textTransform="uppercase"
 fontWeight="bold"   fontsize="64" >
   
   <Text
 bgGradient="linear(to-l, #7928CA,#FF0080)"
 bgClip="text"
 fontSize="2xl"
 fontWeight="extrabold"
>
Technical Skills
</Text>
</Center>
  <Container rounded='lg'  bg="#7979793b" m="2" p={2} w={500} p={4} >
            JavaScript, ES6, React, Next.JS, Python, Ethers.js, Web3.js, Solidity, ERC-20/721/1155, Hardhat, Truffle, Scafold ETH, ChakraUI, Bootstrap, jQuery, PHP, CSS, HTML, Linux, Bash, Raspberry Pi, Arduino, Film, Cinematography, Content Marketing, Video Marketing, Manufacturing Engineering, 3D Modeling, CAD/CAM, IoT, Electronics, Robotics, Product
              Development, Prototyping, Lean Manufacturing, GD&T, Drafting,
              Machining, CNC, CNC Programming, 3D Printing.
            </Container>

<Center       textTransform="uppercase"
 fontWeight="bold"   fontsize="64" >
   
   <Text
 bgGradient="linear(to-l, #7928CA,#FF0080)"
 bgClip="text"
 fontSize="2xl"
 fontWeight="extrabold"
>
Education
</Text>

</Center>
<Container rounded='lg'  bg="#7979793b" m="2" p={2} w={500} ><Text pl={4}>Manufacturing Engineering Technology CAD/CAM (ABET)

</Text><Text pl="4">Bachelor of Science</Text>

<Text pl="4">Western Washington University, Bellingham, WA 2014
</Text></Container>

</Box>  

</Flex>


<Flex templateColumns="repeat(2, 1fr)" p={4} gap={6}  
   color="white">
<Box flexShrink={0}>
<Center       textTransform="uppercase"
 fontWeight="bold"   fontsize="64" >
   
<Text
 bgGradient="linear(to-l, #7928CA,#FF0080)"
 bgClip="text"
 fontSize="2xl"
 fontWeight="extrabold"
>
Projects
</Text>

</Center>
<Box>
<Box rounded='lg'  bg="#7979793b" m="2" p={4}>
<Container fontWeight="bold"> <Link href="https://Thinksats.com">Thinksats.com</Link> </Container>
<Container pl="4" >React website to display the price of common expenses in satoshis.
</Container>
</Box>

<Box rounded='lg'  bg="#7979793b" m="2" p={4}>
<Container fontWeight="bold"><Link href="https://twitter.com/snxstats">SNX Stats Tweetbot</Link></Container>
<Container pl="4">Winner of the Open Defi Hackathon synthetix network SNX tweet bot. 
</Container>
</Box>


<Box rounded='lg'  bg="#7979793b" m="2" p={4}>
<Container fontWeight="bold">CNC Conversion</Container>
<Container pl="4">Converted a conventional mill into a 4 axis CNC.
</Container>
</Box>
</Box>
<Box>
<Box rounded='lg'  bg="#7979793b" m="2" p={2}>
<Container pt="4"fontWeight="bold">6-axis Film Robot</Container>
<Container pl="4">100% custom built with unique CNC and 3D printed parts as well motor control and electronics.</Container>
<Container p="4">

<ReactPlayer 
                  muted
                  playing
                  loop
                  width="100%"
                  height="100%"
                  url={
                    "https://bafybeiborkm62dviribo6pocxmp3y6cylaznrh3mmo4iut53psyt6ehtkq.ipfs.dweb.link/"
                  }
                />
</Container>
</Box>

<Box rounded='lg'  bg="#7979793b" m="2" p={2}>
<Container pt="4"fontWeight="bold">Bioshield</Container>
<Container pl="4">Manufactured, promoted, sold and fulfilled a brand new "bio-safety" product in just one day during the start of COVID-19 lockdown.</Container>
<Container p="4">

                <Image src="https://pbs.twimg.com/media/EqdXIwwUcAELRof?format=jpg&name=large"/>

</Container>
</Box>

<Box rounded='lg'  bg="#7979793b" m="2" p={2}>
<Container pt="4"fontWeight="bold">Plant Timelapse</Container>
<Container pl="4">Raspbery Pi IoT web app controlled studio to film the growth of plants.</Container>
<Container p="4">

                <ReactPlayer 
                  muted
                  playing
                  loop
                  width="100%"
                  height="100%"
                  url={
                    "https://bafybeibizux4d5rx47cxbntwz5u6ogiwevcbzqtbfcyebdjcy7rtdz6ywu.ipfs.dweb.link/"
                  }
                />
</Container>
</Box>

</Box>
</Box>

</Flex>
</Box>

     <Center fontSize="xxx-large">Kineto Films Reel</Center>
      <ReactPlayer
        className="py-4"
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
      <div className="p-4" />
    </>
  );
}
