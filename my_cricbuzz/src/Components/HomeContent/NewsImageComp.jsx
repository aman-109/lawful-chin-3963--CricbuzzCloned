import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsImageComp = () => {
  return (
    <>
        <Box lineHeight={7}>
            <Text color={"gray.500"}>MASSIVE INJURY WOES</Text>
            <Box w="100%" mt={"2"} mb={"3"} >
                <Image borderRadius={5} w="100%" alt="newsImage" src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c243691/jasprit-bumrah-in-danger-of-mi.jpg" />
            </Box>
            <Text as="b" fontSize="2xl">
                <Link>Jasprit Bumrah in danger of missing T20 World Cup</Link>
            </Text>
            <Text color={"gray.500"}>India's star pacer is out of the South Africa series with a recurring back injury</Text>
            <Text lineHeight={"tight"} noOfLines={1} as="b" color={"blue.500"}>India's star pacer is out of the South Africa series with a recurring back injury</Text>
            <Divider mt={3} mb={3}/>
        </Box>
    </>
  )
}

export default NewsImageComp