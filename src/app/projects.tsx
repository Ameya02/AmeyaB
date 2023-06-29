import { Box, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import ProjComp from "./ProjComp";

const Projects = () => {
  return (
    <Flex id="projects" w="full">
      <Box maxW={"1240px"} className="mx-auto px-2 py-16">
        <Text
          fontSize="4xl"
          className="tracking-widest uppercase"
          fontWeight="extrabold"
          textColor="cyan"
        >
          Projects
        </Text>
        <Text fontSize="5xl" fontWeight="extrabold" py={4} textColor="white">
          What I &apos; ve Built
        </Text>
        <Box className="grid md:grid-cols-2 gap-8">
          <ProjComp />
          <ProjComp />
        </Box>
      </Box>
    </Flex>
  );
};

export default Projects;
