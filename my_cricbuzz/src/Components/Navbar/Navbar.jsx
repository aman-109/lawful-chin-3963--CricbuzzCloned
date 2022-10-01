import { Box, Button, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";
import {IoMdSearch} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box maxH={"12rem"} display="flex" bg={"#009270"} color={"white"}>
        <Link to="/">
        <Box w="140px" p={2} ml="0.3rem">
          <Image
            _hover={{
              cursor: "pointer",
            }}
            w="80%"
            alt="logo"
            src={"https://www.cricbuzz.com/images/cb_logo.svg"}
          />
        </Box>
        </Link>
        <Box className={styles.tabBox}>Live Scores</Box>
        <Box className={styles.tabBox}>Schedule</Box>
        <Box className={styles.tabBox}>Archives</Box>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Dropdown />
        </Stack>

        <Box  alignSelf="center">
            <Button fontWeight={"normal"} color={"#666"} bgColor={"white"} borderRadius="18px" size={"sm"}>Cricbuzz Plus</Button>
        </Box>

        <Box ml={"15px"} alignItems={"center"} display={"flex"}  fontSize="2xl" gap={1} >
              <IoMdSearch cursor={"pointer"} />
             <Link to="/login" ><CgProfile cursor={"pointer"}/></Link>
        </Box>
      </Box>
      <Box  h={"34px"} color={"white"} display={"flex"} alignItems="center" bg={"#4a4a4a"}>
            <Box className={styles.navbar2Box1}>MATCHES</Box>
            <Box className={styles.navbar2Box2}>RSA vs IND Won</Box>
            <Box className={styles.navbar2Box2}>PAK vs ENG - Preview </Box>
            <Box className={styles.navbar2Box2}>JT vs GAW - JT Won</Box>
            <Box className={styles.navbar2Box2}>MT vs INDCAP - Compl...</Box>
            <Box className={styles.navbar2Box2}>NOTTS vs DUR - NOT...</Box>

      </Box>
    </>
  );
};

export default Navbar;

