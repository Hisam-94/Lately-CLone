import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdvSec_2 = () => {
  const navigate = useNavigate()
  return (
    <Box bgImage={'https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fecf40bea5148a41aa207a7_pattern-light.svg'} p='4em' backgroundRepeat={'repeat-x'} bgPosition='50% 100%' bgColor={'#e8f8f2'}>
      <Box w='65%' m='auto' >
        <Heading>
          Ready to start generating more effective social posts with AI?
        </Heading>
        <Button
          variant={"solid"}
          bgColor="white"
          color={"#00c66b"}
          border= "2px solid #00c66b"
          _hover={{
            bgColor: "#00c66b",            
            color: "white",
          }}
          mt="2em"
          position={"static"}
          onClick={()=>navigate("/signup")}
        >
          TRY IT FREE
        </Button>
      </Box>
    </Box>
  );
};

export default AdvSec_2;
