"use client";

import { Box } from "@chakra-ui/react";

import Hero from "../components/hero";
import FeaturedProperties from "../components/featuredProperties";
import Contact from "../components/contact";


const HomePage = () => {
  return (
    <Box>
      <Hero />
      <FeaturedProperties />
      <Contact />
    </Box>
  )
}

export default HomePage