import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SocialAiSection = () => {
  return (
    <Flex
      bgColor={"#e6f6ef"}
      alignItems="center"
      textAlign={"start"}
      gap="2em"
      p="4em 6em"
    >
      <Box width={"45%"} mr="2em">
        <Image
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8f07f305f86dca9eb1d69_lately_product_wheel-01.svg"
          alt="Image"
        />
      </Box>
      <Box w={"55%"} color="#133d36">
        <Heading>The Lately Social A.I. Management Content Platform</Heading>
        <Text fontSize={"lg"} mt="0.5em">
          In addition to a full-service platform of scheduling, analytics and
          enterprise-wide syndication features, Lately's artificial intelligence
          generates dozens and even hundreds of custom, pre-tested social posts
          <Text as={"i"}>automatically</Text>.
        </Text>
      </Box>
    </Flex>
  );
};

export default SocialAiSection;
