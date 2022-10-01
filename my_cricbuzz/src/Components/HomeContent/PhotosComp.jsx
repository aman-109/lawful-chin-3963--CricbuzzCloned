import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PhotosComp = ({caption,image,date}) => {
  return (
    <>
    <Box lineHeight={5}>
            
            <Box w="100%" mt={"2"} mb={"3"} >
                <Image borderRadius={5} w="100%" alt={caption} src={image} />
               
            </Box>
            <Text as="b" _hover={{textDecoration:"underline !important"}} fontSize="md">
                <Link>{caption}</Link>
            </Text>
            <Text color={"gray.500"}>{`${new Date(date).toISOString().split('T')[0]}`}</Text>
        </Box>
    </>
  )
}

export default PhotosComp