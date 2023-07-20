import { Image } from "@chakra-ui/next-js";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

import React from "react";

const ProjItems = ({ img, name, stack, link }: any) => {
  return (
    <Flex
      position="relative"
      alignItems={"center"}
      justifyContent="center"
      h={"auto"}
      w={"full"}
      shadow={"xl"}
      className=" rounded-xl shadow-cyan-600 p-4 group hover:bg-gradient-to-r from-cyan-500 to-cyan-700 "
    >
      <Image
        src={img}
        w="700px"
        h="500px"
        rounded={"xl"}
        className=" group-hover:opacity-10"
        alt="Image"
      />
      <Box
        display={"none"}
        position="absolute"
        top={"50%"}
        left={"50%"}
        className=" group-hover:bg-transparent  group-hover:block translate-x-[-50%] translate-y-[-50%]"
      >
        <Text
          fontSize="2xl"
          color={"white"}
          textAlign="center"
          className="tracking-wider"
        >
          {name}
        </Text>
        <Text pb={"4"} pt={2} color={"white"} textAlign={"center"}>
          {stack}
        </Text>
        <Link href={link}>
          <Text
            textAlign={"center"}
            py={3}
            rounded={"lg"}
            bg={"white"}
            textColor={"gray.700"}
            fontStyle={"bold"}
            cursor={"pointer"}
          >
            More Info
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default ProjItems;
