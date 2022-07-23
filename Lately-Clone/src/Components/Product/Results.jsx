import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ResultCard from './ResultCard'

const first = {
    image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa301171b1f5cc69d87_Color_Icons_Engagement.svg",
    color:"#24aae1",
    percentage:"+12,000%",
    heading:"ENGAGEMENT",
    text:"No – that’s not a typo"
}
const second = {
    image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa39cc80bee2292190c_Color_Icons_Clicks.svg",
    color:"#00c66b",
    percentage:"+245%",
    heading:"MORE CLICKS",
    text:"More clicks = mo’ better"
}
const third = {
    image:"https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa333bab928ce2f7868_Color_Icons_Leads.svg",
    color:"#1584b6",
    percentage:"+200%",
    heading:"MORE LEADS",
    text:"And higher quality leads when actively used by marketing and sales"
}

const Results = () => {
  return (
    <Box p='4em 2em'>
        <Text fontSize={'3xl'} width='80%' m='auto' fontWeight={'500'} color='#174c43'>
        Customers See Real Results From The Free Social Media Content Created And Managed With Lately
        </Text>
        <Flex mt='4em' justifyContent={'center'} >
            <ResultCard image={first.image} color={first.color} percentage={first.percentage} text={first.text} heading={first.heading} bcolor={'gray.300'}/>
            <ResultCard image={second.image} color={second.color} percentage={second.percentage} text={second.text} heading={second.heading} bcolor={'gray.300'}/>
            <ResultCard image={third.image} color={third.color} percentage={third.percentage} text={third.text} heading={third.heading}/>
        </Flex>
    </Box>
  )
}

export default Results