import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const AdvSec_1 = () => {
  return (
    <Box>
      <Flex bgColor={"#e8f8f2"} p="5em 9em" gap={"3em"}>
        <Box w={"40%"}>
          <Image
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61c1fcb478083ac00ef63308_heart.png"
            alt="heartImg"
            w={"90%"}
          />
        </Box>
        <Box w={"60%"} textAlign="start">
          <Heading size={"xl"}>
            Magnify your sales and marketing copy with AI that writes for
            people, not targets.
          </Heading>
          <Text fontSize={"xl"} mt="0.5em">
            The right words turn customers into evangelists. So aim higher with
            artificial intelligence that generates high-performing,
            transformative social media content.
          </Text>
          <Button
            variant={"solid"}
            bgColor="#00c66b"
            color={"white"}
            _hover={{
              bgColor: "white",
              border: "2px solid #00c66b",
              color: "#00c66b",
            }}
            mt="2em"
            position={"static"}
          >
            GIVE IT A WHIRL
          </Button>
        </Box>
      </Flex>
      <Box p="0em 7em 3em 7em" bgColor={"#174c43"} color="white">
      <Box>
        <Image src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7b374b200124961cb94ac_home-quote-icon.png" w={'90px'} position='relative' zIndex={'1'} top={'-10'}/>
      </Box>
        <Box textAlign={"start"} w="85%" m={"auto"}>
          <Heading color={"#00c66b"} mb="1em">
            Generate meaningful words that convert with the world’s most human
            AI
          </Heading>
          <Text fontSize={"2xl"}>
            “<Text as={"i"}>Instead of guessing</Text> what messages might stick
            in a vacuum, Lately’s AI counts up all the digital engagement
            breadcrumbs left behind and<Text as={"b"}> predicts</Text> what new
            messages are most likely to get noticed. Brilliant.”
          </Text>
        </Box>
        <Flex mt={"2em"} alignItems="center" w="85%" m={"2em auto"}>
          <Box mr="2em">
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d9fcf3e4c4a4f82bb64_erics-p-500.png"
              alt="Eric photo"
              borderRadius={"50%"}
              w="270px"
            />
          </Box>
          <Box textAlign={"start"} mr="2em">
            <Heading fontSize={"23px"} mb="0.5em">
              Eric Schwartzman
            </Heading>
            <Text fontSize={"sm"}>
              Best-selling author and marketing consultant to Boeing, City
              National Bank, Hard Rock, Johnson & Johnson, Lucasfilm, Olympics,
              US Dept. of State and dozens of small and medium businesses.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d28b9e99b6ab737d081_esass-p-500.png"
              alt="Eric Logo"
              w="60%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AdvSec_1;
