"use client";
import { Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      className="w-full"
      h={{ md: "100vh" }}
      display="flex"
      alignItems="center"
      py={16}
      p={2}
    >
      <Box
        maxW="1240px"
        className="m-auto grid-cols-3"
        display={{ base: "grid", md: "flex" }}
        gap={8}
      >
        <Box className=" col-span-3">
          <Text
            fontSize="4xl"
            fontWeight="semibold"
            color={"cyan"}
            textTransform="uppercase"
            className="tracking-widest"
          >
            About
          </Text>
          <Text py={4} fontSize="5xl" fontWeight="extrabold" color={"white"}>
            Who Am I
          </Text>
          <Text py="2">
            lsnldnsnsnldnsndslnldnksdnksndkndslnsdknskdnsdnksdnkdsnkn
          </Text>
        </Box>
        <Box
          w="full"
          h="auto"
          m="auto"
          rounded="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="4"
          transitionDuration="390ms"
          className=" ease-in shadow-xl shadow-slate-300 hover:scale-105 "
        >
          <Image
            src={
              "https://fossbytes.com/wp-content/uploads/2023/01/best-laptops-programming.jpg"
            }
            alt="comp image"
            rounded="xl"
            borderColor="whatsapp.500"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
