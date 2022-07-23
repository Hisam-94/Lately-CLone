import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card1 = ({image,description,heading}) => {
  return (
    <Flex gap={"3em"} p="4em 6em" alignItems={'center'}>
      <Box w="50%">
        <Image
          src={image}
          alt="Image"
        />
      </Box>
      <Box textAlign={"start"} w="50%" color={"#133d36"}>
        <Heading>{heading}</Heading>
        <Text fontSize={"lg"} mt="0.5em">
        {description}
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
    </Flex>
  )
}

export default Card1