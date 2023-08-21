"use client";

import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import { skills } from "./assets/constants";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <Flex id="skills" w="full" h={{ lg: "100vh" }}>
      <Flex flexDirection="column" className="justify-center h-full">
        <Box className="ml-32    ">
          <Text
            fontSize="4xl"
            fontWeight="semibold"
            color={"cyan"}
            textTransform="uppercase"
            className="tracking-widest"
          >
            Skills
          </Text>
          <Text fontSize="5xl" fontWeight="extrabold" textColor="white">
            What I Can do
          </Text>
        </Box>
        <Marquee className="w-full overflow-hidden " pauseOnHover speed={120}>
          {skills.map((sk) => (
            <Box
              key={sk.name}
              className=" p-3 shadow-xl shadow-gray-600  rounded-lg hover:scale-105 ease-in duration-300"
            >
              <Tooltip label={sk.name}>
                <Card className="grid grid-cols-1 gap-8 justify-center items-center ">
                  <CardBody>
                    <Image w="100px" h={"100px"} src={sk.img} alt={sk.name} />
                  </CardBody>
                </Card>
              </Tooltip>
            </Box>
          ))}
        </Marquee>
      </Flex>
    </Flex>
  );
};

export default Skills;
