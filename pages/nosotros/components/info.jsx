import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";

const Info = () => {
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Box position="relative">
      {/* Fondo superior */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h={{ base: "200px", sm: "280px" }}
        bg="#090D1D"
        zIndex="-1"
      />
      <Container maxW="1200px" h="100%" mx="auto">
        <Box py="20" width="full" w={{ base: "full", md: "75%" }} mx="auto">
          {breakpoint === "base" ? (
            <Flex
              direction="column"
              align="stretch"
              position="relative"
              zIndex="0"
            >
              <Image
                src="/images/susanaM.png"
                h="250px"
                alt="Susana Mezzadri"
                alignSelf="flex-start"
                objectFit="cover"
              />
              <Box py={5}>
                <Heading fontFamily="Ruda">Susana Mezzadri</Heading>
                <Text fontFamily="Roboto">
                  Martillera y corredora pública desde el año 2001, con
                  experiencia de 27 años en el mercado inmobiliario local.
                  Perito en tasaciones en el Departamento Judicial Mar del
                  Plata.
                </Text>
              </Box>
              <Box position="relative" zIndex="0" py={5} px="4" mx="-4" >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="#090D1D"
                  zIndex="0"
                />
                <Box position="relative" zIndex="1">
                  <Text color="white" fontFamily="Roboto">
                    Martillera y corredora pública desde el año 2001, con
                    experiencia de 27 años en el mercado inmobiliario local.
                    Perito en tasaciones en el Departamento Judicial Mar del
                    Plata.
                  </Text>
                </Box>
              </Box>
              <Box bg="white" py={5}>
                <Text fontFamily="Roboto">
                  Al equipo de Ventas se ha incorporado una excelente amiga de
                  la casa, Patricia. Ella sigue el lineamiento de nuestra
                  máxima: Comunicación Predisposición Idoneidad Requisitos
                  fundamentales para concretar así la compra o venta de un
                  inmueble de manera segura.
                </Text>
              </Box>
              <Image
                src="/images/patriciaM.png"
                h="250px"
                alt="Patricia Uranga"
                alignSelf="flex-end"
                objectFit="cover"
              />
            </Flex>
          ) : (
            <Flex direction="column">
              <Flex>
                <Box w="full" maxW="250px">
                  <Image
                    src="/images/susanaD.png"
                    objectFit="cover"
                    alt="Susana Mezzadri"
                    h="400px"
                    w="auto"
                  />
                </Box>
                <Box bgColor="#ECF0FF" my="auto" ml="-5" p={10}>
                  <Heading py="3" fontFamily="Ruda">
                    Susana Mezzadri
                  </Heading>
                  <Box>
                    <Text fontFamily="Roboto">
                      Martillera y corredora pública desde el año 2001, con
                      experiencia de 27 años en el mercado inmobiliario local.
                      Perito en tasaciones en el Departamento Judicial Mar del
                      Plata.
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Box bg="#090D1D" my={-5} w="70%" p={10} mx="auto">
                <Text color="white" fontFamily="Roboto">
                  La inmobiliaria Mezzadri transcurrió por su etapa de oficina
                  al público y por 20 años realizó alquileres de vivienda y
                  temporarios. Con impecable trayectoria, trato cordial y
                  amable, hoy apuesta a la expedición digital, sin perder su
                  calidez, vocación por dar soluciones eficaces y pragmáticas.
                </Text>
              </Box>
              <Flex>
                <Box bgColor="#ECF0FF" my="auto" mr="-5" p={10} zIndex={5}>
                  <Text fontFamily="Roboto">
                    Al equipo de Ventas se ha incorporado una excelente amiga de
                    la casa, Patricia. Ella sigue el lineamiento de nuestra
                    máxima: Comunicación Predisposición Idoneidad Requisitos
                    fundamentales para concretar así la compra o venta de un
                    inmueble de manera segura.
                  </Text>
                </Box>
                <Box w="full" maxW="250px" minW="130px">
                  <Image
                    src="/images/patriciaD.png"
                    objectFit="cover"
                    alt="Patricia Uranga"
                    h="400px"
                    width="auto"
                  />
                </Box>
              </Flex>
            </Flex>
          )}
        </Box>
      </Container>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="280px"
        bg="#090D1D"
        zIndex="-1"
      />
    </Box>
  );
};

export default Info;
