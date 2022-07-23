import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTopSection = () => {
  const navigate = useNavigate();
  return (
    <Box bgColor={"#174c43"} p="3.5em 6em" textAlign={"start"} color="white">
      <Heading size={"sm"} color="#00c669">
        PRODUCT OVERVIEW
      </Heading>
      <Heading fontSize={"43px"} w="75%" mt={"0.5em"}>
        Take the Guesswork Out of What to Say on Social Media
      </Heading>
      <Text fontSize={"2xl"} mt="1em" w={"70%"}>
        Lately’s all-in-one solution uses A.I. to generate the most effective
        content for scaling your social media marketing and social selling
        programs.
      </Text>
      <Button
        _hover={{ bgColor: "#00c66b", color: "white" }}
        bgColor={"#174c43"}
        color="white"
        border={"2px solid #00c66b"}
        display="flex"
        mt={"2em"}
        position="static"
        onClick={() => navigate("/signup")}
      >
        TRY FOR FREE
      </Button>
    </Box>
  );
};

export default ProductTopSection;
