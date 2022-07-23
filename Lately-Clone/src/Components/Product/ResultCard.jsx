import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ResultCard = ({ image, color, percentage, text, heading,bcolor }) => {
  return (
    <Box borderRight={"1px"} borderColor={bcolor ? bcolor:"white"} width={"30%"} p="3em 0em" >
      <Image src={image} w={"15%"} m="auto" />
      <Heading color={color} size='3xl' mb='0.1em'>{percentage}</Heading>
      <Heading color={color} size='lg' as="u">
        {heading}
      </Heading>
      <br/>
      <Text as={"i"}>{text}</Text>
    </Box>
  );
};

export default ResultCard;
