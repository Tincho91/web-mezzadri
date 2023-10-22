import {
    Box,
    Flex,
    Text,
    Image,
    Container,
    SimpleGrid,
    useBreakpointValue,
    Heading
} from "@chakra-ui/react";

const News = ({ news }) => {
    const columns = useBreakpointValue({
        base: 1,  // 3 news cards all in one column for very small devices
        sm: 2,   // 3 news cards split into two rows (2 rows of 3) for small devices
        md: 3,   // 4 news cards split into two rows (2 rows of 2) for medium devices
    });

    const buttonPosition = useBreakpointValue({
        base: "static",
        sm: "absolute",
    });

    return (
        <Box bg="#090D1D">
            <Container maxW="1200px" mx="auto" position="relative" pb={20}>
                <Heading fontSize="2xl" fontWeight="bold" mb={6} color="white" textAlign="center">
                    Novedades
                </Heading>

                <SimpleGrid columns={columns} spacing={10}>
                    {news.map((item, index) => (
                        <Flex
                            key={index}
                            direction="row"
                            border="1px solid"
                            borderColor="gray.400"
                            borderRadius="8px"
                            overflow="hidden"
                            bg="white"
                        >
                            <Box flex="1" maxW="150px">
                                <Image src={item.image} alt={item.title} objectFit="cover" w="full" h="full" />
                            </Box>
                            <Box flex="2" p={4}>
                                <Text fontWeight="bold" mb={2}>{item.title}</Text>
                                <Text>{item.text}</Text>
                            </Box>
                        </Flex>
                    ))}
                </SimpleGrid>
                
                <Text
                    fontSize="2xl"
                    position={buttonPosition}
                    bottom="0"
                    left="0"
                    bg="#ECF0FF"
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

export default News;
