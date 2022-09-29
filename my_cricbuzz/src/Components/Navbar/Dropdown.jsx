import { Box, Button, Stack, Text } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { TriangleDownIcon } from "@chakra-ui/icons";

export default function Dropdown() {
  return (
    <>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            // backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          News <TriangleDownIcon />
        </Button>
        <Box className={styles.dropdown_content}>
          <a href="#">All Stories</a>
          <a href="#">Cricbuzz Plus</a>
          <a href="#">Latest News</a>
          <a href="#">Topics</a>
          <a href="#">Spotlight</a>
          <a href="#">Opinions</a>
          <a href="#">Specials</a>
          <a href="#">Stats &amp; Analysis</a>
          <a href="#">Interviews</a>
          <a href="#">Live Blogs</a>
          <a href="#">Harsha Bhogle</a>
        </Box>
      </Box>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          Series <TriangleDownIcon />
        </Button>
        <Box className={styles.dropdown_content2}>
          <a href="#">ICC Mens T20 World Cup 2022</a>
          <a href="#">South Africa tour of India, 2022</a>
          <a href="#">England tour of Pakistan, 2022</a>
          <a href="#">Caribbean Premier League 2022</a>
          <a href="#">Road Safety World Series T20 2022</a>
          <a href="#">Irani Cup 2022</a>
          <a href="#">County Championship Division One 2022</a>
          <a href="#">Womens Asia Cup T20 2022</a>
          <a href="#">All Series »</a>
        </Box>
      </Box>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          Teams <TriangleDownIcon />
        </Button>
        <Box className={`${styles.dropdown_content4} ${styles.dropdown_content45}`}>
          <Box>
            <Text color={"black"} fontSize={"0.9rem"} fontWeight="bold" as={"h1"}>TEST TEAMS</Text>
            <a href="#">India</a>
            <a href="#">Afghanistan</a>
            <a href="#">Ireland</a>
            <a href="#">Pakistan</a>
            <a href="#">Australia</a>
            <a href="#">Sri Lanka</a>
            <a href="#">Bangladesh</a>
            <a href="#">England</a>
            <a href="#">West Indies</a>
            <a href="#">South Africa</a>
            <a href="#">Zimbabwe</a>
            <a href="#">New Zealand</a>
          </Box>
          <Box>
            <Text color={"black"} fontSize={"0.9rem"} fontWeight="bold" as={"h1"}>ASOCIATES</Text>
            <a href="#">Malaysia</a>
            <a href="#">Nepal</a>
            <a href="#">Germany</a>
            <a href="#">Namibia</a>
            <a href="#">Denmark</a>
            <a href="#">Singapore</a>
            <a href="#">Papua New Guinea</a>
            <a href="#">Kuwait</a>
            <a href="#">Vanuatu</a>
            <a href="#">Jersey</a>
            <a href="#">Oman</a>
            <a href="#">Fiji</a>
          </Box>
        </Box>
      </Box>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          Videos <TriangleDownIcon />
        </Button>
        <Box className={styles.dropdown_content}>
          <a href="#"> All Videos</a>
          <a href="#"> Categories</a>
          <a href="#">Playlists</a>
        </Box>
      </Box>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          Rankings <TriangleDownIcon />
        </Button>
        <Box className={styles.dropdown_content}>
          <a href="#">ICC Rankings - Men</a>
          <a href="#">ICC Rankings - Women</a>
        </Box>
      </Box>
      <Box className={styles.dropdown}>
        <Button
          _hover={{
            backgroundColor: "#028062",
            border: "none",
            borderRadius: "none",
          }}
          display={"flex"}
          gap={1}
          colorScheme={"white"}
          variant={"ghost"}
          size={"xs"}
          //   p={0}
          margin="auto"
          fontSize="14px"
          //   w="100%"
          h="100%"
        >
          More <TriangleDownIcon />
        </Button>
        <Box className={styles.dropdown_content3}>
          <a href="#">World Test Championship</a>
          <a href="#">World Cup Super League</a>
          <a href="#">Quiz</a>
          <a href="#">Photos</a>
          <a href="#">Mobile Apps</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </Box>
      </Box>
    </>
  );
}
