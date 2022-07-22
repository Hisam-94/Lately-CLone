import {
  Box,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const WorkSection = () => {
  return (
    <Box textAlign={"start"} p="2em 13em" color={"#174c43"} fontSize="lg">
      <Heading mb={"0.5em"}>Here’s how it works:</Heading>
      <Text mb={"1em"}>
        Lately helps humans write better marketing content in collaboration with
        artificial intelligence and software automation. (That collaboration
        part is key, btw. And is the basis of everything we do.)
      </Text>
      <UnorderedList p={"0em 2em"}>
        <ListItem mb={"0.5em"}>
          Each time your brain hears a new song, it automatically accesses every
          song you’ve ever heard before.
        </ListItem>
        <ListItem mb={"0.5em"}>
          Your brain then looks for familiar touch points in order to index that
          new song in your memory banks.
        </ListItem>
        <ListItem mb={"0.5em"}>
          Every voice has a frequency, like a musical note. When you read text,
          you hear that voice inside your head.
        </ListItem>
        <ListItem mb={"0.5em"}>
          Like a rock ‘n’ roll dj, it’s the writer's job to give you familiar
          touch points in order to sell you something new.
        </ListItem>
        <ListItem mb={"0.5em"}>
          Lately’s AI studies familiar touch points in order to create a writing
          model and then applies this writing model to transform longform
          content into something new.
        </ListItem>
        <Box display={"flex"} justifyContent="center" p={"3em 4em"}>
          <Image src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1c2e6312c3754f634dacb_stones-p-800.png" />
        </Box>
      </UnorderedList>
    </Box>
  );
};

export default WorkSection;
