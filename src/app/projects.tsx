import { Box, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import ProjItems from "./ProjItems";
import { projects_data } from "./assets/constants";

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
          {projects_data.map((p_d) => (
            <ProjItems
              key={p_d.project_name}
              img={p_d.project_img}
              name={p_d.project_name}
              stack={p_d.project_stack}
              link={p_d.project_link}
            />
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default Projects;
