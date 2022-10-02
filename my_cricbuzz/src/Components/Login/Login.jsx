import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Highlight,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  TagLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

import { ChevronRightIcon } from "@chakra-ui/icons";

const Login = () => {
  const toast =useToast()
  const [isOn, setIsOn] = useState(false);
  const [temp,setTemp] =useState(false)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    setIsOn(true);
  };
  const handleSubmit=()=>{
    successToaster()
    setTimeout(()=>{
      navigate("/")
    },2000)
  }
  const successToaster=()=>{
    return toast({title: 'Success',
    description: "Account Created Successfully.",
    status: 'success',
    position:"top-right",
    duration: 1000,
    isClosable: true})
  }

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
      </Box>
      <Box
        width={"100%"}
        bg="#fff"
        h={"712px"}
        mt={"0.3rem"}
        mb={"0.3rem"}
        // border="1px solid "
      >
        <Box bg="#fff" h={"100%"} minH={"500px"} pb="60px">
          <Box padding={"8px 15px"}>
            <Box
              h={"45px"}
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Breadcrumb
                fontSize={"0.9rem"}
                spacing="4px"
                separator={<ChevronRightIcon color="black.500" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem fontWeight="bold" isCurrentPage>
                  <BreadcrumbLink href="/login">Account</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box w="13%">
                <Image
                  w="100%"
                  alt="CricbuzPlus"
                  src="https://www.cricbuzz.com/images/cb_logo_plus_color.svg"
                />
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box h={"100%"} display="flex" pb="60px">
            <Box
              w="45%"
              textAlign={"center"}
              margin={"auto"}
              marginTop="100px"
              // border={"1px solid red"}
            >
              <Text as="b" fontSize={"2xl"}>
                Login / Sign Up{" "}
              </Text>
              <Text color={"gray.600"}>We will send OTP to your email id</Text>
              <Box
                h={"200px"}
                // border="1px solid"
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <InputGroup w="80%">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={HiOutlineMail} w={6} h={6} />}
                  />
                  <Input
                    type="email"
                    border="none"
                    onChange={handleLogin}
                    borderBottom="1px solid"
                    placeholder="Enter your email id"
                  />
                </InputGroup>
              </Box>
              <Box
                display="flex"
                h="20px"
                gap="5px"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <input type="checkbox"></input>
                <Highlight
                  query={["Terms of Use", "Privacy Policy"]}
                  styles={{ color: "blue" }}
                >
                  I agree with the Terms of Use and Privacy Policy of Cricbuzz
                </Highlight>
              </Box>
              <Box mt={"1.5rem"}>
                <Button
                  disabled={isOn === false}
                  borderRadius={"none"}
                  colorScheme="teal"
                  size="md"
                  w="80%"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
