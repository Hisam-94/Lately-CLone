import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ImageCard = ({image,description,heading}) => {
  return (
    <Box w='30%' color={'#133d36'} p='1.5em'>
        <Image w={'45%'} m='auto' src={image}/>
        <Heading size={'lg'} mt='1em'>
        {heading}
        </Heading>
        <Text fontSize={'lg'} mt='1em'>
        {description}
        </Text>
        <Button
          _hover={{ bgColor: "#00c66b", color: "white" }}
          bgColor={"white"}
          color="#00c66b"
          border={"2px solid #00c66b"}
          m="4em"
        >
          LEARN MORE
        </Button>
    </Box>
  )
}

export default ImageCard