import {
  Box,
  Image,
  Text,
  Container,
  useBreakpointValue,
  Flex,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

const Team = () => {
  const buttonPosition = useBreakpointValue({
    base: "static",
    sm: "absolute",
  });

  const displayText = useBreakpointValue({
    base: "block",
    sm: "static",
  });

  const containerBg = useBreakpointValue({
    base: "none",
    sm: "#ECF0FF",
  });

  const imagePadding = useBreakpointValue({
    base: "0",
    sm: "4",
  });

  return (
    <Box
      position="relative"
      bg={containerBg}
      pt={{ base: "0", sm: imagePadding }}
    >
      <Container maxW="1200px" mx="auto" position="relative">
        <Flex position="relative" direction="column">
          <Image
            src="images/foto1.png"
            alt="Team"
            mx={{ base: "0", sm: imagePadding }}
            mt={{ base: "5", sm: imagePadding }}
          />

          <VStack
            position={{ base: "static", md: "absolute" }}
            right="0"
            bottom="0"
            maxW={{ base: "", md: "300px" }}
            mt={{ base: 4, sm: 0 }}
            spacing={2}
            alignItems="flex-start"
            bg={{ sm: "#ECF0FF" }}
            mb={{ base: 3, md: 0 }}
          >
            <Heading
              pt={{ sm: 3 }}
              pl={{ sm: 3 }}
              pr={{ sm: 3 }}
              fontFamily="Ruda"
            >
              Somos un equipo
            </Heading>
            <Text pt={{ sm: 3 }} pl={{ sm: 3 }} pr={{ sm: 3 }} fontFamily='Roboto' color='#090D1DCC' fontSize='16px' pb={5}>
              Nos reunimos en el Colegio de Martilleros y Corredores Públicos
              para ajustar estrategias y efectivizar la concreción del negocio.
            </Text>

            
            <Link
              href="/nosotros"
              width="full"
              style={{ textDecoration: "none" }}
            >
              <Box
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight={300}
                letterSpacing="4.8px"
                bg="#090D1D"
                zIndex="1"
                py={5}
                color="white"
                display={displayText}
              >
                <Flex
                  alignItems="center"
                  gap={2}
                  alignlign="center"
                  justify="center"
                >
                  <AddIcon boxSize="16px" />
                  <Text>VER MÁS</Text>
                </Flex>
              </Box>
            </Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Team;
