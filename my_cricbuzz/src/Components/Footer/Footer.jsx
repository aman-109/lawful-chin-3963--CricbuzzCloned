import { Box, Icon, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Footer.module.css"
import {GiCircleCage} from "react-icons/gi"
import {AiFillAndroid} from "react-icons/ai"
import {AiFillApple} from "react-icons/ai"
import {FaPinterestSquare} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <Box className={styles.footerBox}>
           <Box className={styles.footerdiv1}>
            <Box className={styles.footerdiv1Child}>
                <Image _hover={{
              cursor: "pointer",
            }}
            margin="auto"
            marginRight={"0"}
            w="50%"
            alt="logo"
            src={"https://www.cricbuzz.com/images/cb_logo.svg"}
/>
            </Box>
            <Box className={styles.footerdiv1Child}>
                <Text fontSize={"xl"} as={"b"}>MOBILE SITE & APPS</Text>
                
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={GiCircleCage} />
                        <Text fontSize={"14px"}>
                            m.cricbuzz.com
                        </Text>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={AiFillAndroid} />
                        <Text fontSize={"14px"}>
                            Android
                        </Text>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={AiFillApple} />
                        <Text fontSize={"14px"}>
                           iOS
                        </Text>
                </Box>


            </Box>
            <Box className={styles.footerdiv1Child}>
                <Text fontSize={"xl"} as={"b"}>FOLLOW US ON</Text>
                
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={FaFacebookF} />
                        <Text fontSize={"14px"}>
                            facebook
                        </Text>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={AiOutlineTwitter} />
                        <Text fontSize={"14px"}>
                            twitter
                        </Text>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={AiFillYoutube} />
                        <Text fontSize={"14px"}>
                           youtube
                        </Text>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={FaPinterestSquare} />
                        <Text fontSize={"14px"}>
                           Pinterest
                        </Text>
                </Box>


            </Box>
            <Box className={styles.footerdiv1Child}>
                <Text fontSize={"xl"} as={"b"}>MOBILE SITE & APPS</Text>
                
                <Box textAlign={"start"} w="100%" mt="1.2rem" lineHeight={2}>
                    <Text fontSize={"14px"}>Careers</Text>
                    <Text fontSize={"14px"}>Advertise</Text>
                    <Text fontSize={"14px"}>Privacy Policy</Text>
                    <Text fontSize={"14px"}>Terms of Use</Text>
                    <Text fontSize={"14px"}>Cricbuzz TV Ads</Text>
                </Box>


            </Box>
           </Box>
           <Box className={styles.footerdiv2}>
           © 2022 Cricbuzz.comCloned, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times
           </Box>
    </Box>
    
    </>
  )
}

export default Footer