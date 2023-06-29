"use client";

import About from "./about";
import Contacts from "./contacts";
import Main from "./home";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
