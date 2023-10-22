import { Flex, Box, Image, Container } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex as="footer" bg="#090D1D" color="white" py={{base: '8', md: '10'}} w='100%'>
      <Container maxW="1200px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          {/* Icons at the top for mdall devices */}
          <Flex
            align="center"
            justify="space-between"
            w="100%"
            mb={{ base: 10, md: 0 }}
            display={{ base: "flex", md: "none" }}
          >
            <FaEnvelope size="1.5em" />
            <FaWhatsapp size="1.5em" />
            <FaFacebook size="1.5em" />
            <FaInstagram size="1.5em" />
          </Flex>

          {/* Brand Image and Other Logo */}
          <Flex justifyContent="space-between" w="100%">
            <Flex align="center" gap={20}>
              <Image
                src="/images/footerbrand.png"
                alt="Footer Brand"
                h="50px"
              />
              <Flex
                align="center"
                gap={2}
                display={{ base: "none", md: "flex" }}
              >
                <FaEnvelope size="1.5em" />
                <FaWhatsapp size="1.5em" />
                <FaFacebook size="1.5em" />
                <FaInstagram size="1.5em" />
              </Flex>
            </Flex>
            {/* Other Logo */}
            <Box>
              <Image src="/images/cdmlogo.png" alt="CDM Logo" h={{base: "50px", md: "80px"}} />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
