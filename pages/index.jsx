"use client";

import { Box } from "@chakra-ui/react";

import Hero from "../components/hero";
import FeaturedProperties from "../components/featuredProperties";
import Contact from "../components/contact";
import Team from "../components/team";

const HomePage = () => {

  return (
    <Box>
      <Hero />
      <FeaturedProperties />
      <Contact />
      <Team />
    </Box>
  )
}

export default HomePage