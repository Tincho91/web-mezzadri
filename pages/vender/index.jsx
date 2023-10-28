import Team from "../../components/team";
import ContactForm from "../../components/contactForm";

import {
  Box,
  Flex,
  Container,
  Text,
  Image,
  Heading,
  Stack,
  Card,
  CardBody,
  useBreakpointValue,
} from "@chakra-ui/react";

const Vender = () => {
  return (
    <>
      <Box
        position="relative"
        pb={{ base: "10", md: "auto" }}
        bg="#090D1D"
        zIndex="0"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="250px"
          backgroundImage={{
            base: "/images/sellBannerMobile.png",
            sm: "/images/sellBanner.png",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="0"
        />

        <Container
          maxW="1200px"
          mx="auto"
          pt="10"
          zIndex="1"
          position="relative"
        >
          <Flex direction="column" align="center" h="full" pb={10}>
            <Heading fontSize="4xl" fontFamily="Ruda" fontWeight="bold" textColor="white">
            ¿Querés{" "}
              <Box as="span" position="relative" display="inline-block">
                <Box
                  as="span"
                  position="absolute"
                  bottom="10%"
                  left="50%"
                  transform="translateX(-50%)"
                  width="102%"
                  height="50%"
                  bg="#090D1D"
                  zIndex="1"
                ></Box>
                <span
                  style={{
                    zIndex: "2",
                    position: "relative",
                  }}
                >
                  vender
                </span>
              </Box>{" "}
              un inmueble?
            </Heading>
            <Text fontSize="md" mt={4} fontFamily="Roboto" color="white">
              Queremos ayudarte a encontrar el mejor inmueble en{" "}
              <strong>Mar del Plata</strong>.
            </Text>
          </Flex>
          <ContactForm />
        </Container>
      </Box>

      <Team />
    </>
  );
};

export default Vender;
