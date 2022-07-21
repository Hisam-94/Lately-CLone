import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const resuldData = [
    {
        image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6002236421b928e945df4385_stat4.png",
        heading:"Generate Social Content the New Way",
        description:"Stop guessing what to write. Lately’s AI creates organic social media content that it already knows your audience will love."
    },
    {
        image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60022364b4348190da308534_stat3.png",
        heading:"Unlock the Power of Longform Content",
        description:"Automatically atomize any longform video, audio, or text into dozens of pre-tested social media posts designed to magnify engagement."
    },
    {
        image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223648dc79dc41d78513f_stat2.png",
        heading:"Social Selling on Steroids",
        description:"Generate consistent, engaging content that converts high-quality leads for employees who don’t know a dang thing about copywriting."
    },
    {
        image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223649f9648efb7abb3d3_stat_1.png",
        heading:"Game-Changing AI Insights",
        description:"Learn the key words, phrases and values that make up the messaging your brand’s audience actually wants to watch, hear or read."
    }
]

const ResultSection = () => {
  return (
    <Box p={"3em 7em 3em 7em"}>
        <Heading size={'2xl'} mb={"1em"}>AI-generated results that don’t muck around.</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap="3em" mb='5em'>
            {resuldData.map((el)=>(<GridItem key={el.heading} w={"100%"} h='150px'>
                <Flex>
                    <Box>
                        <Image src={el.image} alt={el.heading} w='90%'/>
                    </Box>
                    <Box textAlign={"start"}>
                        <Heading fontSize={"23px"} mb='0.5em'>{el.heading}</Heading>
                        <Text>{el.description}</Text>
                    </Box>
                </Flex>
            </GridItem>))}
        </Grid>
        <Box bgColor={'#e8f8f2'}  w={'75%'} m='auto' p={'1em 4em 2em 4em'} borderRadius='0.5em'>
            <Heading fontSize={'23px'}>AI generator available in:</Heading>
            <Text mt={'1em'}>🇺🇸 English, 🇪🇸 Spanish, 🇮🇹 Italian, 🇵🇹 Portuguese, 🇯🇵 Japanese, 🇩🇪 German, and more – just ask!</Text>
        </Box>
    </Box>
  )
}

export default ResultSection