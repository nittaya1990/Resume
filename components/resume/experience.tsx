
import React from "react";
import { Text, Box, Container, Center } from "@chakra-ui/react"


export default function Experience() {
    return (<> <Center textTransform="uppercase"
        fontWeight="bold" fontsize="64" ><Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
        >
            Work Experience
        </Text></Center>

        <Box rounded='lg' bg="#7979793b" m="2" p={2}>
            <Container fontWeight="bold">Kineto Films, Co-owner CEO:</Container>
            <Text pl="4">Jan 2017 – March 2020</Text>
            <Text color="white" pl="4" w={400}>
                Kineto Films specialized in high quality video, content
                marketing and storytelling. It helped its clients grow and
                thrive in a social media connected world.
            </Text>
        </Box>
        <Box rounded='lg' bg="#7979793b" m="2" p={4}>
            <Container fontWeight="bold"> Polyform US, Manufacturing </Container>
            <Text pl="4">Engineer: March 2015 – Dec 2017</Text>
            <Container pl="4" w={500}>
                Created complex kinematic assemblies of rotomolding machines.
                Designed a new production line that included oversight for the
                entire project. Managed multiple projects for instance a
                factory-wide IoT system, with custom hardware and sensors to
                gain unique production insight.
            </Container>
        </Box></>)
}
