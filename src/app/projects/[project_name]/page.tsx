"use client";
import { FileHosting } from "../../assets/projects";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const rfc = () => {
  return (
    <Box className="w-full overflow-hidden">
      <Box className="w-screen h-[50vh] relative">
        <Box className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={FileHosting}
          alt="/"
        />
        <Box className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <Text className="py-2 text-xl text-cyan-500">File Upload</Text>
          <Text className="py-2 text-md">React JS / AWS / Vite</Text>
        </Box>
      </Box>

      <Box className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <Box className="col-span-4">
          <Text>Project</Text>
          <Text className="text-3xl font-bold">Overview</Text>
          <Text>
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </Text>

          <Button
            className="px-8 py-2 mt-4 mr-8 bg-cyan-400"
            onClick={() => {}}
          >
            Code
          </Button>

          <Button className="px-8 py-2 mt-4 bg-cyan-400" onClick={() => {}}>
            Demo
          </Button>
        </Box>
        <Box className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <Box className="p-2">
            <Text className="text-center font-bold pb-2">Technologies</Text>
            <Box className="grid grid-cols-3 md:grid-cols-1">
              <Text className="text-white py-2 flex items-center">
                <RiRadioButtonFill /> React
              </Text>
              <Text className="text-white py-2 flex items-center">
                <RiRadioButtonFill /> Tailwind
              </Text>
              <Text className="text-white py-2 flex items-center">
                <RiRadioButtonFill /> Javascript
              </Text>
              <Text className="text-white py-2 flex items-center">
                <RiRadioButtonFill /> Firebase
              </Text>
              <Text className="text-white py-2 flex items-center">
                <RiRadioButtonFill /> IMDB API
              </Text>
            </Box>
          </Box>
        </Box>
        <Link href="/#projects">
          <Text className="underline cursor-pointer">Back</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default rfc;
