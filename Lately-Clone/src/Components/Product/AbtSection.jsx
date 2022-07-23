import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";


const AbtSection = () => {
  return (
    <Box p="0em 7em 2em 7em" bgColor={"#174c43"} color="white">
      <Box>
        <Image src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7b374b200124961cb94ac_home-quote-icon.png" w={'90px'} position='relative' zIndex={'1'} top={'-10'}/>
      </Box>
        <Box textAlign={"start"} w="85%" m={"auto"}>         
          <Text fontSize={"2xl"}>
            “Before Lately, social media was a weak point for me to do super consistently – because I didn’t have the time and didn’t want to sound dumb or boring. Now I have confidence because<Text as={"b"}> Lately takes the pressure off</Text> and makes me sound smart!”
          </Text>
        </Box>
        <Flex mt={"2em"} alignItems="center" w="85%" m={"2em auto"}>
          <Box mr="2em">
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000f81ed69a057cba01da03_1516314003757.jpeg"
              alt="Eric photo"
              borderRadius={"50%"}
              w="200px"
            />
          </Box>
          <Box textAlign={"start"} mr="2em">
            <Heading fontSize={"23px"} mb="0.5em">
            Alicia Jimenez
            </Heading>
            <Text fontSize={"lg"}>
            Senior Vice President, Global Head of Technology & Platform Services Delivery, SAP
            </Text>
          </Box>
          <Box>
            <Image
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6001c93ce5e6851d13888269_saplogowhite-p-500.png"
              w="50%"
            />
          </Box>
        </Flex>
      </Box>
  )
}

export default AbtSection