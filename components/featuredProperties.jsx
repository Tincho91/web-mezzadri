import {
  Box,
  Text,
  Image,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const FeaturedProperties = () => {
  const displayConfig = useBreakpointValue({
    base: { count: 3, perRow: 1 },
    sm: { count: 4, perRow: 2 },
    md: { count: 6, perRow: 3 },
  });

  const buttonPosition = useBreakpointValue({
    base: "static",
    sm: "absolute",
  });

  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="320px"
        bg="#090D1D"
        zIndex="-1"
      />
      <Container maxW="1200px" mx="auto" pt={8} pb={{base: "10", sm: "20"}} position="relative">

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          {[...Array(displayConfig.count)].map((_, index) => (
            <Card maxW={displayConfig.perRow === 3 ? '31.5%' : displayConfig.perRow === 2 ? '48%' : '100%'} key={index} borderRadius={0} shadow="none">
              <CardBody p={0}>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius={0}
                  h="300px"
                />
                <Stack mt="6" spacing="3" p={0}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern.
                  </Text>
                </Stack>
              </CardBody>
              <Flex py={3}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Text color="blue.600" fontSize="2xl">$450</Text>
                  <Button variant="solid" colorScheme="blue">
                    More Info
                  </Button>
                </Stack>
              </Flex>
            </Card>
          ))}
        </Box>
        
        <Text
          fontSize="2xl"
          position={buttonPosition}
          bottom="0"
          left="0"
          bg="#090D1D"
          zIndex="1"
          p={3}
          color="white"
          mt={buttonPosition === "static" ? "4" : "0"} // margin-top for static position
        >
          VER MÁS
        </Text>
        
      </Container>
    </Box>
  );
};

export default FeaturedProperties;
