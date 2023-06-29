"use client";

import { Box, DrawerFooter, Flex, Link, Spacer, Text } from "@chakra-ui/react";

import Logo from "./assets/ABLogo.png";
import { Image } from "@chakra-ui/next-js";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMenuButtonWideFill,
  BsTwitter,
} from "react-icons/bs";
import { links } from "./assets/constants";
const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShandow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShandow);
  });
  return (
    <Flex
      className={
        shadow
          ? "w-full h-[10vh] fixed shadow-xl shadow-slate-00 z-[100]"
          : "w-full h-[10vh] fixed z-[100]"
      }
      alignItems="center"
      p={3}
    >
      <Flex>
        <NextLink href="#home" passHref>
          <Link color="white" mr={4} justifySelf="flex-start">
            <Image src={Logo} className="h-16 w-16  " alt="Logo" />
          </Link>
        </NextLink>
      </Flex>
      <Spacer />
      <Flex display={{ base: "none", md: "flex" }} justify="flex-end">
        {links.map((lk) => (
          <NextLink key={lk.name} href={lk.link} passHref>
            <Link color="white" mr={4}>
              {lk.name}
            </Link>
          </NextLink>
        ))}
      </Flex>
      <Flex
        onClick={onOpen}
        cursor="pointer"
        color="white"
        _hover={{ color: "red" }}
        display={{ base: "flex", md: "none" }}
      >
        <BsMenuButtonWideFill />
      </Flex>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerHeader borderBottomWidth="1px">
            <NextLink href="/" passHref>
              <Link color="white" mr={4} justifySelf="flex-start">
                Ameya Bavkar
              </Link>
            </NextLink>
            <Text fontSize="12px" fontWeight="extrabold">
              Lets Innovate Something Shall We
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" justifyContent="space-between">
              <Box paddingTop="20px">
                <NextLink href="/about" passHref>
                  <Link color="white" paddingX={2} paddingY={10}>
                    About
                  </Link>
                </NextLink>
              </Box>
              <Box paddingTop="20px">
                <NextLink href="/experience" passHref>
                  <Link color="white" paddingX={2} paddingY={10}>
                    Experience
                  </Link>
                </NextLink>
              </Box>
              <Box paddingTop="20px">
                <NextLink href="/skills" passHref>
                  <Link color="white" paddingX={2} paddingY={10}>
                    Skills
                  </Link>
                </NextLink>
              </Box>
              <Box paddingTop="20px">
                <NextLink href="/projects" passHref>
                  <Link color="white" paddingX={2} paddingY={10}>
                    Projects
                  </Link>
                </NextLink>
              </Box>
              <Box paddingTop="20px">
                <NextLink href="/contact" passHref>
                  <Link color="white" paddingX={2} paddingY={10}>
                    Contact Us
                  </Link>
                </NextLink>
              </Box>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              my="3rem"
              mx="1rem"
              width={{ base: "100%", sm: "80%" }}
            >
              <Box color="blue" rounded="full" boxShadow="xl" bg="white">
                <BsLinkedin />
              </Box>
              <Box rounded="full" boxShadow="xl">
                <BsGithub />
              </Box>
              <Box color="pink" rounded="full" boxShadow="xl">
                <BsInstagram />
              </Box>
              <Box color="blue" rounded="full" boxShadow="xl">
                <BsTwitter />
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
