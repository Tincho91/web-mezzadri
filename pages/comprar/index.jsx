import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
import SearchBar from "../../components/ui/searchBar";
import getProperties from "../../actions/getProperties";
import Contact from "../../components/contact";

const Comprar = () => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const displayConfig = useBreakpointValue({
    base: { count: 3, perRow: 1 },
    sm: { count: 4, perRow: 2 },
    md: { count: 6, perRow: 3 },
  });

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        let fetchedProperties = [];
        if (router.query.properties) {
          fetchedProperties = JSON.parse(router.query.properties);
        } else {
          // Fetch the featured properties when no parameters are passed
          fetchedProperties = await getProperties({ isFeatured: true });
        }
        setProperties(fetchedProperties);
      } catch (err) {
        setError("Failed to fetch properties.");
      }
      setLoading(false);
    };

    fetchProperties();
  }, [router.query]);

  const handleSearch = () => {
    const category = document.getElementById("categorySelect").value;
    const roomId = document.getElementById("roomSelect").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;

    // Redirect with search parameters
    router.push({
      pathname: "/comprar",
      query: {
        categoryId: category || undefined,
        roomId: roomId || undefined,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
      },
    });
  };

  return (
    <>
      <Box
        position="relative"
        backgroundSize="cover"
        backgroundPosition="center"
        pb={{ base: "10", md: "auto" }}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={{
            base: "/images/buyHeroMobile.png",
            md: "/images/buyHeroDesktop.png",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
        />

        <Container maxW="1200px" mx="auto" pt="10">
          <Flex direction="column" align="flex-start" h="full">
            <Heading
              fontSize="4xl"
              fontFamily="Ruda"
              fontWeight="bold"
              textColor="white"
            >
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
                  bg="#2D4496"
                  zIndex="1"
                ></Box>
                <span
                  style={{
                    zIndex: "2",
                    position: "relative",
                  }}
                >
                  comprar
                </span>
              </Box>{" "}
              un inmueble?
            </Heading>
            <Text fontSize="md" mt={4} fontFamily="Roboto" color="white">
              Queremos ayudarte a encontrar el mejor inmueble en{" "}
              <strong>Mar del Plata</strong>.
            </Text>

            <SearchBar context="comprar" handleSearchComprar={handleSearch} />
          </Flex>
        </Container>
      </Box>
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
                <ChakraLink _hover={{ textDecoration: "none" }} w="100%">
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
                          U$D{" "}
                          {Number(property.price)
                            .toLocaleString("en-US")
                            .replace(/,/g, ".")}{" "}
                          .-
                        </Text>
                      </Stack>
                    </Flex>
                  </Card>
                </ChakraLink>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
      <Contact />
    </>
  );
};

export default Comprar;
