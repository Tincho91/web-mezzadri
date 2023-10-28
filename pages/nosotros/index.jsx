import {
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import Info from "./components/info";

const Nosotros = () => {
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: 'md', lg: 'lg' });

  return (
    <>
      <Box
        bgImage={
          breakpoint === "base"
            ? "url('/images/teamBannerMobile.png')"
            : "url('/images/teamBannerDesktop.png')"
        }
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition={{ base: "center", sm: "75% 20%" }}
        h={{ base: "550px", sm: "300px" }}
        maxH="80vh"
        position="relative"
      >
        <Container maxW="1200px" h="100%" mx="auto">
          <Box
            position={{ base: "initial", sm: "absolute" }}
            top={{ sm: "35%", lg: "45%" }}
            left={{ sm: 0, md: "auto" }}
            m={{ sm: 5, md: "0" }}
            p={{ base: 5, md: "0" }}
            bg={{ base: "rgba(0,0,0,0.5)", md: "transparent" }}
            textColor={{ base: "white", md: "black" }}
            w={{ md: "35%", xl: "30%" }}
          >
            <Heading as="h1" size="xl" fontFamily="Ruda">
              Sobre Nosotros
            </Heading>
            <Text mt={2}>
              Nos reunimos en el Colegio de Martilleros y Corredores Públicos
              para ajustar estrategias y efectivizar la concreción del negocio.
            </Text>
          </Box>
        </Container>
      </Box>


      <Info />

    </>
  );
};

export default Nosotros;
