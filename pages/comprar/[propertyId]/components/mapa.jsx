import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Mapa = ({ direccion }) => {
  const encodedDireccion = encodeURIComponent(
    `${direccion}, Mar del Plata, Buenos Aires, Argentina`
  );

  return (
    <Box
      h={{ base: "300px", sm: "450px" }}
      maxHeight="80vh"
      position="relative"
    >
      <Box
        bgImage="url(/images/map.png)"
        bgSize="cover"
        bgPosition="center"
        filter="blur(2px)"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
      >
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          bg="#090D1D"
          opacity="0.7"
        ></Box>
      </Box>
      <Center position="absolute" top="0" bottom="0" left="0" right="0">
        <Button
          colorScheme="blue"
          flex={{ base: "1", md: "0.5" }}
          bg="#090D1D"
          borderRadius="0"
          py="6"
          w="full"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodedDireccion}`,
              "_blank"
            )
          }
        >
        <Flex
          gap={2}
          justify="center"
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight={300}
          letterSpacing="4.8px"
        >
          <Text>Ver en Mapa</Text>
          <ExternalLinkIcon />
          </Flex>
        </Button>
      </Center>
    </Box>
  );
};

export default Mapa;
