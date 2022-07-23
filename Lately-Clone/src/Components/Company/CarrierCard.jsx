import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const CarrierCard = () => {
  return (
    <Box p={'4em'} borderBottom='1px' borderBottomColor={'gray.200'} color='#174c43'>
      <Flex justify={'center'} gap='3em'>
        <Heading size={'2xl'}>Careers at Lately</Heading>
        <Button
          _hover={{ bgColor: "#00c66b", color: "white" }}
          bgColor={"white"}
          color="#00c66b"
          border={"2px solid #00c66b"}
          p='1em 1.5em'
          as={'b'}
        >
          JOIN OUR TEAM
        </Button>
      </Flex>
    </Box>
  );
};

export default CarrierCard;
