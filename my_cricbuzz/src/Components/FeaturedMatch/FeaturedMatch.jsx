import { Box, Center, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./FeaturedMatch.module.css"

const FeaturedMatch = () => {
  return (
    <>
    <Box className={styles.featuredBox}>
    <Text as="b" fontSize={"lg"} color={"#009270"}>
      FEATURED MATCHES
    </Text>
    <Box className={styles.sliderBox}>
        <Box className={styles.eachMatch}>
            <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <Text as="b">RSA</Text>
              <Text as="b">106-8 (20)</Text>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <Text as="b">IND</Text>
              <Text as="b">110-2 (16.4)</Text>
            </Box>

            <Text mt="0.3rem"  color={"blue"}>India won by 8 wkts</Text>

        </Box>
        <Center height='60px'>
  <Divider orientation='vertical' />
</Center>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <Text as="b">JT</Text>
              <Text as="b">226-4 (20)</Text>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <Text as="b">GAW</Text>
              <Text as="b">189-8 (20)</Text>
            </Box>

            <Text mt="0.3rem"  color={"blue"}>Jamaica Tallawahs won by 37 wkts</Text>

        </Box>
        <Center height='60px'>
  <Divider  orientation='vertical' />
</Center>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <Text as="b">AUS</Text>
              <Text as="b">106-8 (20)</Text>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <Text as="b">NZ</Text>
              <Text as="b">150-2 (20)</Text>
            </Box>

            <Text mt="0.3rem"  color={"blue"}>Newzeland won </Text>

        </Box>
        <Center height='60px'>
  <Divider orientation='vertical' />
</Center>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <Text as="b">MT</Text>
              <Text as="b">161-5 (20)</Text>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <Text as="b">INDC</Text>
              <Text as="b">162-3 (16.4)</Text>
            </Box>

            <Text mt="0.3rem"  color={"blue"}>India Capital won by 8 wkts</Text>

        </Box>
    </Box>
    </Box>
    </>
  )
}

export default FeaturedMatch