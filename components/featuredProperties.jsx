import { useEffect, useState } from "react";
import {
  Box,
  Link,
  Text,
  Image,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";

import getFeaturedProperties from "../actions/getFeaturedProperties";
import { AddIcon } from "@chakra-ui/icons";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayConfig = useBreakpointValue({
    base: { count: 3, perRow: 1 },
    sm: { count: 4, perRow: 2 },
    md: { count: 6, perRow: 3 },
  });

  const buttonPosition = useBreakpointValue({
    base: "static",
    sm: "absolute",
  });

  useEffect(() => {
    getFeaturedProperties()
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
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
        <Container
          maxW="1200px"
          mx="auto"
          pt={8}
          pb={{ base: "10", sm: "20" }}
          position="relative"
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="row"
            gap={5}
          >
            {Array.from({ length: 1 }).map((_, index) => (
              <Box key={index}>
                <Skeleton borderRadius={0} h="370px" w="370px" />

                {/* Skeleton for text */}
                <Stack mt="6" spacing="3" p={0}>
                  <Skeleton h="20px" w="80%" />
                  <Skeleton h="20px" w="50%" />
                </Stack>

                <Flex py={3}>
                  <Skeleton h="30px" w="60%" />
                </Flex>
              </Box>
            ))}
          </Box>

          <Link href="/comprar">
            <Box
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight={300}
              letterSpacing="4.8px"
              position={buttonPosition}
              bottom="0"
              left="0"
              bg="#090D1D"
              zIndex="1"
              py={5}
              px={20}
              color="white"
              mt={buttonPosition === "static" ? "4" : "0"} // margin-top for static position
            >
              <Flex alignItems="center" gap={5}>
                <AddIcon boxSize="16px" />
                <Text>VER MÁS</Text>
              </Flex>
            </Box>
          </Link>
        </Container>
      </Box>
    );
  }
  if (error) return <div>Error: {error}</div>;

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
      <Container
        maxW="1200px"
        mx="auto"
        pt={8}
        pb={{ base: "10", sm: "20" }}
        position="relative"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          {properties.slice(0, displayConfig.count).map((property, index) => (
            <Link href={`/comprar/${property.id}`} key={index} passHref>
              <Link _hover={{ textDecoration: "none" }} w="100%">
                <Card borderRadius={0} bg="transparent" shadow={0}>
                  <CardBody p={0}>
                    <Image
                      src={property.images[0]?.url || "default-image-url"}
                      alt={property.name || "Property"}
                      borderRadius={0}
                      h="370px"
                      w="370px"
                      objectFit="cover"
                    />
                    <Stack mt="6" spacing="3" p={0}>
                      <Flex justifyContent="space-between">
                        <Heading size="md">{property.name}</Heading>
                        <Text>{property.area}m²</Text>
                      </Flex>
                      <Text>{property.address}</Text>
                    </Stack>
                  </CardBody>
                  <Flex py={3}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text color="blue.600" fontSize="2xl">
                        U$D {property.price}
                      </Text>
                    </Stack>
                  </Flex>
                </Card>
              </Link>
            </Link>
          ))}
        </Box>

        <Link href="/comprar" width="full" style={{ textDecoration: "none" }}>
          <Box
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight={300}
            letterSpacing="4.8px"
            position={buttonPosition}
            bottom="0"
            left="0"
            bg="#090D1D"
            zIndex="1"
            mx="auto"
            py={5}
            px={{ base: "0", sm: "20" }}
            color="white"
            mt={buttonPosition === "static" ? "4" : "0"} // margin-top for static position
          >
            <Flex
              alignItems="center"
              gap={5}
              alignlign="center"
              justify="center"
            >
              <AddIcon boxSize="16px" />
              <Text>VER MÁS</Text>
            </Flex>
          </Box>
        </Link>
      </Container>
    </Box>
  );
};

export default FeaturedProperties;
