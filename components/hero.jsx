import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { AnimatedIcon } from "./animations/animatedIcon";

import { ArrowDownIcon } from "@chakra-ui/icons";

import SearchBar from "./ui/searchBar";

const Hero = () => {
  const buttonPosition = useBreakpointValue({
    base: "static",
    sm: "absolute",
  });

  const displayText = useBreakpointValue({
    base: "none",
    sm: "block",
  });

  const cycle = (...values) => {
    const getNextIndex = (current, total) => {
      const next = current + 1;
      return next >= total ? 0 : next;
    };

    let index = 0;
    return () => {
      const val = values[index];
      index = getNextIndex(index, values.length);
      return val;
    };
  };

  return (
    <>
      <Box
        minH={{ base: "calc(100vh - 72px)", md: "calc(100vh - 92px)" }}
        position="relative"
        backgroundSize="cover"
        backgroundPosition="center"
        pb={{ base: "10", lg: "auto" }}
        pt="10"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 25%), url('/images/hero.png')"
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
        />
        <Container maxW="1200px" mx="auto" mb={{ base: "0", sm: "5" }}>
          <Flex direction="column" align="flex-start" h="full">
            <Heading fontSize="4xl" fontFamily="Ruda" fontWeight="bold">
              Comprá el mejor{" "}
              <Box as="span" position="relative" display="inline-block">
                <Box
                  as="span"
                  position="absolute"
                  bottom="10%"
                  left="50%"
                  transform="translateX(-50%)"
                  width="102%"
                  height="50%"
                  bg="#B9D0FF"
                  zIndex="1"
                ></Box>
                <span
                  style={{
                    zIndex: "2",
                    position: "relative",
                  }}
                >
                  inmueble
                </span>
              </Box>{" "}
              para vos
            </Heading>
            <Text fontSize="md" mt={4} fontFamily="Roboto">
              Nos especializamos en ayudarte a encontrar el mejor inmueble en{" "}
              <strong>Mar del Plata</strong> que se adapte a tus necesidades.
            </Text>

            <SearchBar context="home" />
          </Flex>
        </Container>
      </Box>
      <Container maxW="1200px" mx="auto" position="relative">
        <Box
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight={300}
          letterSpacing="4.8px"
          position={buttonPosition}
          bottom="0"
          right="0"
          bg="#090D1D"
          zIndex="1"
          p={5}
          color="white"
          mt={buttonPosition === "static" ? "4" : "0"}
          display={displayText} // Only displayed on sm screens and larger
        >
          <Flex alignItems="center" gap={5}>
            <AnimatedIcon IconComponent={ArrowDownIcon} />
            <Text>BUSCA EN MAR DEL PLATA</Text>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
