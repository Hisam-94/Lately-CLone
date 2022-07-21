import { AspectRatio, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const VideoSection = () => {
  return (
    <Stack bgColor='#e8f8f2'>
      <Flex justify={"space-between"} p="5em 6em 4em 6em">
        <Box boxShadow='lg' rounded='md' bg='white' w={"65%"} mr="3em">          
          <video src="https://cdnlately-v3.s3.amazonaws.com/lately_looping.mp4" width={"100%"} height={"100%"}  autoPlay="autoplay" muted='mute' loop='loop'></video>
        </Box>
        <Box textAlign={"start"} w="35%">
            <Heading mb={"0.5em"} size="2xl">How it works.</Heading>
            <Text fontSize={"18px"} w='90%' >First, Lately’s artificial intelligence studies what your social media audience wants to watch, hear or read and then builds you a custom writing model, based on what it learns. <br /><br />

            Then it uses that writing model to automatically repurpose any longform video, audio or text into DOZENS of pre-tested social media posts, based on what it learns. (Yes, way!)</Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default VideoSection;
