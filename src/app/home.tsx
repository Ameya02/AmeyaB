import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Main = () => {
  return (
    <Box id="home" w="full" h="100vh" textAlign="center">
      <Box
        maxW="1240px"
        w="full"
        h="full"
        mx="auto"
        p="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text
            fontWeight="thin"
            textTransform="uppercase"
            fontSize="sm"
            color="white"
          >
            Lets Innovate Something Shall We
          </Text>
          <Text py={4} color="white" fontSize="4xl" fontWeight="extrabold">
            Hi, I &apos; am<span style={{ color: "cyan" }}>Ameya Bavkar</span>
          </Text>
          <Text py={2} color="white" fontSize="4xl" fontWeight="extrabold">
            A Web Developer
          </Text>
          <Text
            py={2}
            color="white"
            fontSize="lg"
            fontWeight="thin"
            maxW="70%"
            mx="auto"
          >
            A Final Year Student in MU India
          </Text>

          <Flex className="flex items-center justify-between my-6">
            <Box
              color={"blue.500"}
              fontSize={"1.5rem"}
              className="rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsLinkedin />
            </Box>
            <Box
              fontSize={"1.5rem"}
              className="rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsGithub />
            </Box>
            <Box
              color={"pink.400"}
              fontSize={"1.5rem"}
              className="rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsInstagram />
            </Box>
            <Box
              color={"blue.300"}
              fontSize={"1.5rem"}
              className="rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsTwitter />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
