import {
  Box,
  Text,
  Stack,
  Button,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TopSection = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Stack>
        <Flex
          border={"1px solid black"}
          p="3em 6em 3em 6em"
          bg={"#174c43"}
          color="white"
        >
          <Box w={"60%"} mr="6em">
            <Text fontWeight="600" fontSize="5xl" textAlign={"start"}>
              Stop guessing what to say.
            </Text>
            <Text textAlign={"start"} fontSize="2xl" mt={"0.5em"}>
              Lately’s AI learns which words will get you the most engagement
              and repurposes video, audio and text into dozens of social posts
              that contain those words.
            </Text>
            <Button
              _hover={{ bgColor: "#00c66b", color: "white" }}
              bgColor={"#174c43"}
              color="white"
              border={"2px solid #00c66b"}
              display="flex"
              mt={"2em"}
              position="static"
              onClick={()=>navigate("/signup")}
            >
              TRY IT FREE
            </Button>
          </Box>
          <Box w={"40%"}>
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f2c835efdcde7733f5dcba_flagkately-p-500.png"
              alt="Top-sec-Image"
              w="300px"
            />
          </Box>
        </Flex>
      </Stack>
    </div>
  );
};

export default TopSection;
