import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./style.css";
import TypewriterComponent from "typewriter-effect";
const Main = () => {
  return (
    <Box id="home" w="full" h="100vh" textAlign="center" className="">
      <Box
        className="content"
        maxW="1240px"
        w="full"
        h="full"
        mx="auto"
        p="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="w-full overflow-hidden">
          <Text
            fontWeight="thin"
            textTransform="uppercase"
            fontSize="sm"
            color="white"
          >
            Lets Innovate Something Shall We
          </Text>
          <Text py={4} color="white" fontSize="4xl" fontWeight="extrabold">
            Hi, I&apos;am
            <span className="bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Ameya Bavkar
            </span>
            <TypewriterComponent
              options={{
                strings: [
                  "A Frontend Devloper",
                  "A Backend Developer",
                  "A Full Stack Developer",
                ],
                wrapperClassName:
                  "font-extrabold text-4xl bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent",
                cursorClassName:
                  "text-4xl bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent",

                autoStart: true,
                loop: true,
              }}
            />
          </Text>

          <Text
            py={2}
            color="white"
            fontSize="lg"
            fontWeight="thin"
            maxW="70%"
            mx="auto"
          >
            A Final Year Student in CS India
          </Text>

          <Flex className="flex items-center justify-items-center justify-center  my-6 ">
            <Box
              color={"blue.500"}
              fontSize={"1.5rem"}
              className="mx-6 rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsLinkedin />
            </Box>
            <Box
              fontSize={"1.5rem"}
              className="mx-6 rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsGithub />
            </Box>
            <Box
              color={"pink.400"}
              fontSize={"1.5rem"}
              className="mx-6 rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              <BsInstagram />
            </Box>
            <Box
              color={"blue.300"}
              fontSize={"1.5rem"}
              className="mx-6 rounded-full shadow-lg shadow-slate-50 p-6 cursor-pointer hover:scale-105 ease-in duration-200"
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
