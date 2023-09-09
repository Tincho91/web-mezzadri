import { Box, Text, Container, useBreakpointValue } from "@chakra-ui/react";

const Contact = () => {
    const displayText = useBreakpointValue({
        base: "none",
        sm: "block",
    });

    return (
        <Box bg="#090D1D">
        <Container maxW="1200px" mx="auto" p={8}  position="relative">
            {/* Image container */}
            <Box
                h="320px"
                bgImage="url('/images/contactBanner.png')"
                bgSize="cover"
                bgPosition="center"
                position="relative"
            >
                {/* Text */}
                <Text
                    fontSize="2xl"
                    position="absolute"
                    bottom="0"
                    right="0"
                    bg="#090D1D"
                    zIndex="1"
                    p={3}
                    color="white"
                    display={displayText}
                >
                    CONTACTANOS
                </Text>
            </Box>
        </Container>
        </Box>
    );
}

export default Contact