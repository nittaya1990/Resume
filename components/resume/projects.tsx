import React from "react";
import ReactPlayer from "react-player";
import { Image, Link, Flex, Text, Box, Container, Center } from "@chakra-ui/react"

export default function Projects() {
    return (<>
        <Flex templateColumns="repeat(2, 1fr)" p={4} gap={6}
            color="white">
            <Box flexShrink={0}>
                <Center textTransform="uppercase"
                    fontWeight="bold" fontsize="64" >

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
                    <Box rounded='lg' bg="#7979793b" m="2" p={4}>
                        <Container fontWeight="bold"> <Link href="https://Thinksats.com">Thinksats.com</Link> </Container>
                        <Container pl="4" >React website to display the price of common expenses in satoshis.
                        </Container>
                    </Box>

                    <Box rounded='lg' bg="#7979793b" m="2" p={4}>
                        <Container fontWeight="bold"><Link href="https://twitter.com/snxstats">SNX Stats Tweetbot</Link></Container>
                        <Container pl="4">Winner of the Open Defi Hackathon synthetix network SNX tweet bot.
                        </Container>
                    </Box>


                    <Box rounded='lg' bg="#7979793b" m="2" p={4}>
                        <Container fontWeight="bold">CNC Conversion</Container>
                        <Container pl="4">Converted a conventional mill into a 4 axis CNC.
                        </Container>
                    </Box>
                </Box>
                <Box>
                    <Box rounded='lg' bg="#7979793b" m="2" p={2}>
                        <Container pt="4" fontWeight="bold">6-axis Film Robot</Container>
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

                    <Box rounded='lg' bg="#7979793b" m="2" p={2}>
                        <Container pt="4" fontWeight="bold">Bioshield</Container>
                        <Container pl="4">Manufactured, promoted, sold and fulfilled a brand new "bio-safety" product in just one day during the start of COVID-19 lockdown.</Container>
                        <Container p="4">

                            <Image src="https://pbs.twimg.com/media/EqdXIwwUcAELRof?format=jpg&name=large" />

                        </Container>
                    </Box>

                    <Box rounded='lg' bg="#7979793b" m="2" p={2}>
                        <Container pt="4" fontWeight="bold">Plant Timelapse</Container>
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

        </Flex></>)
}