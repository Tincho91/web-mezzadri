"use client";

import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";

import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        color={isOpen ? "white" : "#2D4496"}
        background="transparent"
        fontSize="25px"
        onClick={isOpen ? onClose : onOpen}
        icon={<FaBars />}
      ></IconButton>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay>
          <DrawerContent backgroundColor="#2D4496" color="white">
            <DrawerCloseButton
              color="white"
              zIndex="2"
              position="absolute"
              left="4"
              top="4"
            />
            <DrawerBody>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <VStack spacing={4} alignItems="center">
                  <Link
                    fontSize={{
                      base: "2xl",
                      sm: "3xl",
                      md: "4xl",
                      lg: "5xl",
                      xl: "6xl",
                    }}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    fontSize={{
                      base: "2xl",
                      sm: "3xl",
                      md: "4xl",
                      lg: "5xl",
                      xl: "6xl",
                    }}
                    href="/nosotros"
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    fontSize={{
                      base: "2xl",
                      sm: "3xl",
                      md: "4xl",
                      lg: "5xl",
                      xl: "6xl",
                    }}
                    href="/comprar"
                  >
                    Quiero Comprar
                  </Link>
                  <Link
                    fontSize={{
                      base: "2xl",
                      sm: "3xl",
                      md: "4xl",
                      lg: "5xl",
                      xl: "6xl",
                    }}
                    href="/vender"
                  >
                    Quiero Vender
                  </Link>
                </VStack>
                <Flex
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                  mt="20"
                  gap={6}
                >
                  <Link isExternal href="mailto:example@example.com">
                    <FaEnvelope size="1.5em" />
                  </Link>
                  <Link
                    isExternal
                    href="https://api.whatsapp.com/send?phone=PHONE_NUMBER"
                  >
                    <FaWhatsapp size="1.5em" />
                  </Link>
                  <Link isExternal href="https://www.facebook.com/YourPage">
                    <FaFacebook size="1.5em" />
                  </Link>
                  <Link isExternal href="https://www.instagram.com/YourProfile">
                    <FaInstagram size="1.5em" />
                  </Link>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
