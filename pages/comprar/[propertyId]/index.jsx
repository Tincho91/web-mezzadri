"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";

import getProperty from "../../../actions/getProperty";
import ImageCarousel from "./components/imageCarrousel";
import Mapa from "./components/mapa";
import Contacto from "./components/contacto";

const PropertyPage = () => {
  const [property, setProperty] = useState(null);
  const router = useRouter();
  const { propertyId } = router.query; // Get propertyId from router query

  useEffect(() => {
    // Ensure propertyId exists
    if (!propertyId) return;

    const fetchData = async () => {
      const fetchedProperty = await getProperty(propertyId);
      setProperty(fetchedProperty);
    };

    fetchData();
  }, [propertyId]); // React will re-run this effect if propertyId changes

  if (!property) {
    return null;
  }

  const imageUrls =
    property && Array.isArray(property.images)
      ? property.images.map((img) => img.url)
      : [];

  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="500px"
        bg="#090D1D"
        zIndex="-1"
      />
      <Container zIndex="1" maxW="1200px" mx="auto">
        <Box w="full">
          <Grid
            templateRows={{ base: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" }}
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            pt="10"
          >
            <Flex
              alignItems="center"
              justifyContent="flex-start" // justify text to the left
              gridRow={{ base: 1, sm: 1 }}
              gridColumn={{ base: 1, sm: 1 }}
            >
              <Heading fontFamily="Ruda" color="white">
                {property.name}
              </Heading>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="flex-end" // justify text to the right
              gridRow={{ base: 3, sm: 1 }}
              gridColumn={{ base: 1, sm: 2 }}
            >
              <Text color="white" fontSize="2xl">
                U$D{" "}
                {Number(property.price)
                  .toLocaleString("en-US")
                  .replace(/,/g, ".")}{" "}
                .-
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="flex-start" // justify text to the left
              gridRow={{ base: 2, sm: 2 }}
              gridColumn={{ base: 1, sm: 1 }}
            >
              <CiLocationOn color="white" />
              <Text color="white">{property.address}</Text>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="flex-end" // justify text to the right
              gridRow={{ base: 4, sm: 2 }}
              gridColumn={{ base: 1, sm: 2 }}
            >
              <Button
                colorScheme="blue"
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight={300}
                letterSpacing="4.8px"
                bg="white"
                color="black"
                borderRadius={0}
                py={7}
                onClick={() => {
                  console.log("Compra iniciada");
                }}
              >
                <Flex gap={2} justify="center">
                  <Text>$ COMPRAR</Text>
                </Flex>
              </Button>
            </Flex>
          </Grid>
        </Box>

        {imageUrls.length > 0 && <ImageCarousel images={imageUrls} />}

        <Box mb={10}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            {/* Description Section */}
            <Box>
              <Heading fontFamily="Ruda" textColor="#090D1D">
                Descripción
              </Heading>
              <Text mt={5}>{property.description}</Text>
            </Box>

            {/* Characteristics Section */}
            <Box>
              <Heading fontFamily="Ruda" textColor="#090D1D">
                Características
              </Heading>
              <Box mt={5} overflow="hidden">
                <Grid templateColumns="repeat(2, 1fr)" borderWidth={1}>
                  <Grid templateRows="repeat(3, 1fr)">
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Superficie</Text>
                      <Text>{property.area}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Ambientes</Text>
                      <Text>{property.rooms.value}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Habitaciones</Text>
                      <Text>{property.bedrooms.value}</Text>
                    </Flex>
                  </Grid>
                  <Grid templateRows="repeat(3, 1fr)">
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Baños</Text>
                      <Text>{property.bathrooms.value}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Cocheras</Text>
                      <Text>{property.garages}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" borderWidth={1} p={2}>
                      <Text>Expensas</Text>
                      <Text>{property.expenses ? "Sí" : "No"}</Text>
                    </Flex>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
        
        <Box mb={10}>
          <Mapa direccion={property.address} />
        </Box>

        <Box mb={10}>
          <Contacto />
        </Box>

      </Container>
    </Box>
  );
};

export default PropertyPage;
