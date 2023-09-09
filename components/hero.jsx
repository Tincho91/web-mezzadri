import {
  Box,
  Flex,
  Text,
  Select,
  Input,
  Button,
  Divider,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";

const Hero = () => {
  const buttonPosition = useBreakpointValue({
    base: "static",
    sm: "absolute",
  });

  const displayText = useBreakpointValue({
    base: "none",
    sm: "block",
  });

  return (
    <Box
      minH="50vh"
      position="relative"
      backgroundSize="cover"
      backgroundPosition="center"

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

      <Container maxW="1200px" mx="auto">
        <Flex
          direction="column"
          align="flex-start"
          h="full"
        >
          <Text fontSize="4xl" fontWeight="bold">
            Comprá el mejor{" "}
            <span style={{ textDecoration: "underline" }}>inmueble</span> para
            vos
          </Text>
          <Text fontSize="md" mt={4}>
            Nos especializamos en ayudarte a encontrar el mejor inmueble en{" "}
            <strong>Mar del Plata</strong> que se adapte a tus necesidades.
          </Text>
          <Flex
            my={8}
            w="full"
            direction={{ base: "column", md: "row" }}
            gap={2}
            bg="white"
            p={1}
            alignItems="center"
          >
            <Select
              flex="1"
              placeholder="Tipo de propiedad"
              borderWidth="0"
              focusBorderColor="none"
            >
              {/* Options will be fetched from backend */}
            </Select>
            <Divider
              orientation={{ base: "horizontal", sm: "vertical" }}
              borderColor="grey"
            />
            <Select
              flex="1"
              placeholder="Ambientes"
              borderWidth="0"
              focusBorderColor="none"
            >
              {/* Options will be fetched from backend */}
            </Select>
            <Divider
              orientation={{ base: "horizontal", sm: "vertical" }}
              borderColor="grey"
            />
            <Flex
              flex="1"
              direction={{ base: "row", sm: "row" }}
              gap={2}
              align="center" // Added this line to center vertically
            >
              <Text>$</Text>
              <Input
                flex="0.9"
                placeholder="Min."
                type="number"
                borderWidth="1"
                focusBorderColor="none"
              />
              <Divider
                flex="0.2"
                orientation="horizontal"
                borderColor="grey"
                alignSelf="stretch"
                my="auto"
              />
              <Input
                flex="0.9"
                placeholder="Max."
                type="number"
                borderWidth="1"
                focusBorderColor="none"
              />
            </Flex>
            <Divider
              orientation={{ base: "horizontal", sm: "vertical" }}
              borderColor="grey"
            />
            <Button
              colorScheme="blue"
              flex="0.5"
              bg="#090D1D"
              borderRadius="0"
              py="6"
            >
              BUSCAR
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Text
          fontSize="2xl"
          position={buttonPosition}
          bottom="0"
          right="0"
          bg="#090D1D"
          zIndex="1"
          p={3}
          color="white"
          mt={buttonPosition === "static" ? "4" : "0"}
          display={displayText} // Only displayed on sm screens and larger
        >
          BUSCA EN MAR DEL PLATA
        </Text>
    </Box>
  );
};

export default Hero;
