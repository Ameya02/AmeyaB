"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contacts = () => {
  return (
    <Box id="contacts" className="w-full lg:h-screen">
      <Box className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <Text
          fontSize="2xl"
          className="tracking-widest"
          fontWeight="extrabold"
          textColor="cyan"
          textTransform="uppercase"
        >
          Contacts
        </Text>
        <Text>Get In Touch</Text>
        <Box className="grid lg:grid-cols-5 gap-8">
          <Box
            className="col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl"
            p={4}
            h={"full"}
            w={"full"}
          >
            <Box className="lg:p-4 h-full">
              <Box>
                <Image
                  src={"./assets/contactus.jpg"}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  w={"full"}
                  h={"300px"}
                  alt="Contact Image"
                />
              </Box>
              <Box>
                <Text py={2}>Name Here</Text>
                <Text>Developer</Text>
                <Text className="py-4">
                  I am available for internship and full time position Contact
                  Me and let &apos; s talk
                </Text>
              </Box>
              <Box>
                <Text className="uppercase py-4">Connect With Me</Text>
                <Box className="flex items-center justify-between pb-4">
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
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4">
            <Box className="p-4">
              <Box className="grid md:grid-cols-2 gap-4 w-full py-2">
                <Flex className="flex-col py-2">
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </Flex>
                <Flex flexDirection={"column"} className="py-2">
                  <FormControl>
                    <FormLabel>Your Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Flex>
              </Box>
              <Flex flexDirection={"column"} className="py-2">
                <FormControl w="full">
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Flex>
              <Flex flexDirection={"column"} className="py-2">
                <FormControl w="full">
                  <FormLabel>Message</FormLabel>
                  <Textarea mb="8px" rows={10} />
                </FormControl>
              </Flex>
              <Button
                loadingText="Submitting"
                color="teal"
                bg="dimgrey"
                variant="solid"
                className="p-4 w-full"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center items-center py-12">
          <Link href="#">
            <Box className="rounded-full shadow-lg shadow-white p-4 cursor-pointer hover:scale-105 ease-in duration-150">
              <HiOutlineChevronDoubleUp color="cyan" size={30} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
