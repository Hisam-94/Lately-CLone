import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Text = () => {
  return (
    <Box display={'flex'} justifyContent='center' p={'4em 7em 8em 7em'}>
        <Image src='https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29d706767c54673422575_AndTheresMore_Text-01.svg' alt='text image' w={'30%'}/>
    </Box>
  )
}

export default Text