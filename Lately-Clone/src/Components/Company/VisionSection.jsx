import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const VisionSection = () => {
  return (
    <Box textAlign={"start"} p="0em 14.5em" color={"#174c43"}>
      <Heading mb={"0.5em"}>Vision</Heading>
      <Text mb={"1em"} fontSize="lg">
        Lately helps humans write better marketing content in collaboration with
        artificial intelligence and software automation. (That collaboration
        part is key, btw. And is the basis of everything we do.)
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Leading by example is core to our product and our belief. We walk the
        talk. And we do it, together.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Because Lately is a community. We see ourselves as an extension of our
        customers' marketing teams and we prioritize relatability and listening
        so they see us as not AI-powered software but as humans. We actively try
        to get to know each and every one of them and make ourselves available
        for them to get to know us.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Most importantly, we emphasize these beliefs internally, as well.
        Authenticity through honesty, collaboration, productive dialogue and a
        genuine desire to solve problems together is our lifeblood. As we are a
        community to our customers, we are also a community to ourselves; we
        recognize the magnitude of the journey we're on and rely upon each other
        to both acknowledge successes and work through challenges.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Together, in partnership with our customers, we’re growing Lately into a
        new evolution of AI-content creation software that humans truly love.
      </Text>
    </Box>
  );
};

export default VisionSection;
