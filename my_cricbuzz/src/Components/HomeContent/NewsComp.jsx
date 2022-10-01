import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsComp = ({title,date}) => {
  return (
    <>
       <Box>
        <Text>
            <Link>
            {title}
            </Link>
            </Text>
        <Text color={"gray.500"}>{new Date(Number(date)).toLocaleDateString("en-US")}</Text>
        <Divider mt={1} mb={1}/>
        </Box>
    </>
  )
}

export default NewsComp