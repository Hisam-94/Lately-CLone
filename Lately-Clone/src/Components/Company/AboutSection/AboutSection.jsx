import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const AboutSection = () => {
  return (
    <Box>
      <Box bgColor={"#15463d"} p="5em 11em 6em 11em" color={"white"}>
        <Heading size={"sm"} color="#20c763" mb={"1em"}>
          ABOUT
        </Heading>
        <Heading size={"2xl"}>AI fueled by the neuroscience of music?</Heading>
      </Box>
      <Box display={"flex"} justifyContent="center" p={"4em 12em"}>
        <Image
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1ca4f99c05d00ccde0d83_katephones-p-1080.png"
          alt="image"
          w={"90%"}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;
