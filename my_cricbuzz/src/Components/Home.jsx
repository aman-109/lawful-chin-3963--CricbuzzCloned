import { Box } from '@chakra-ui/react'
import React from 'react'
import FeaturedMatch from './FeaturedMatch/FeaturedMatch'
import HomeContent from './HomeContent/HomeContent'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <Box maxW="100%">
        <Box >

        <Navbar/>
        </Box>
        <Box>
          <FeaturedMatch/>
        </Box>
        <Box>
          <HomeContent/>
        </Box>
    </Box>
  )
}

export default Home