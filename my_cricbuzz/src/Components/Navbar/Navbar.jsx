import { Box, Image } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <>
      <Box maxH={"12rem"} display="flex" bg={"#009270"} color={"white"}>
        <Box w="140px" p={2} ml="0.3rem" border="1px solid">
          <Image
            w="80%"
            alt="logo"
            src={"https://www.cricbuzz.com/images/cb_logo.svg"}
          />
        </Box>
        <Box p={3} border="1px solid black">
          Live Scores
        </Box>
        <Box p={3} border="1px solid black">
          Schedule
        </Box>
        <Box p={3} border="1px solid black">
          Archives
        </Box>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            // transition="all 0.2s"
           
           
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            File <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>New File</MenuItem>
            <MenuItem>New Window</MenuItem>
            
            <MenuItem>Open...</MenuItem>
            <MenuItem>Save File</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box maxH={"9.5rem"}>hii</Box>
    </>
  );
};

export default Navbar;
