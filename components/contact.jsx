import { Box, Text, Container, Heading, Flex, Link } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Contacto = () => {

  return (
    <Box bg="#090D1D" position='relative'>
      <Container maxW="1200px" mx="auto" p={{ base: 0, md: 8 }} position="relative">
        <Box
          h="320px"
          bgImage="url('/images/contactBanner.png')"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <Box
            position="absolute"
            top={{ base: '17%', md: "50%" }}
            zIndex="1"
            px={10}
            textAlign="left"
          >
            <Heading color="white" pb={5} fontFamily="Ruda">
              Estemos en contacto
            </Heading>
            <Text color="white" fontFamily="Roboto" maxW={{base:"100%", md:"45%"}}>
              Déjanos tu consulta, opinión o sugerencia. Recibí novedades de
              obra nueva y ofertas.
            </Text>
          </Box>

          <Link href="/">
            <Box
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight={300}
              letterSpacing="4.8px"
              position="absolute"
              bottom={{base:"5%", sm: "0"}}
              right={{base:"5%", sm: "0"}}
              left={{base:'5%', sm: 'auto'}}
              bg="#090D1D"
              zIndex="1"
              py={5}
              px={20}
              color="white"
            >
              <Flex alignItems="center" gap={5} justifyContent="center">
                <ChatIcon boxSize="16px" />
                <Text>CONTACTANOS</Text>
              </Flex>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacto;
