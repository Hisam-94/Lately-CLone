import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const AI_Content = () => {
  return (
    <Flex gap={"2em"} p="4em 6em">
      <Box textAlign={"start"} w="50%" color={"#133d36"}>
        <Heading>A.I. Content Writing - How it Works</Heading>
        <Text fontSize={"lg"} mt="0.5em">
          First, Lately studies what words and phrases best resonate with your
          target audience by analyzing the social channels you connect to our
          platform. We then build a writing model based on what we learn and
          apply this writing model to each piece of longform content that you
          feed the A.I. brain.
        </Text>
        <Button
          _hover={{ bgColor: "#00c66b", color: "white" }}
          bgColor={"white"}
          color="#00c66b"
          border={"2px solid #00c66b"}
          mt="0.5em"
        >
          LEARN MORE
        </Button>
      </Box>
      <Box w="50%">
        <Image
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7a906e969ea8c00a347d8_home-bowtie-content-to-gold.png"
          alt="Image"
        />
      </Box>
    </Flex>
  );
};

export default AI_Content;
