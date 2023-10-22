import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import getRooms from "../../actions/getRooms";
import getCategories from "../../actions/getCategories";
import getProperties from "../../actions/getProperties";

import { BsHouse } from "react-icons/bs";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { SearchIcon } from "@chakra-ui/icons";

import {
  Flex,
  Select,
  Input,
  Button,
  Divider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const SearchBar = ({ context }) => {
  const [categories, setCategories] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch categories
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });

    // Fetch rooms
    getRooms()
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
      });
  }, []);

  const router = useRouter();

  const handleSearch = async () => {
    const category = document.getElementById("categorySelect").value;
    const roomId = document.getElementById("roomSelect").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;

    const properties = await getProperties({
      categoryId: category,
      roomId,
      minPrice,
      maxPrice,
    });

    if (context === "comprar") {
      router.push({
        pathname: "/comprar",
        query: { properties: JSON.stringify(properties) },
      });
    } else if (context === "home") {
      // Define what should happen when a search is made from the home page.
      // For example, redirect to '/comprar' with the search results:
      router.push({
        pathname: "/comprar",
        query: { properties: JSON.stringify(properties) },
      });
    }
    // Handle other contexts as needed
  };

  // Determine the orientation based on the current breakpoint
  const dividerOrientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  });

  return (
    <Flex
      my={8}
      w="full"
      direction={{ base: "column", lg: "row" }}
      gap={2}
      bg="white"
      p={3}
      alignItems="center"
      position="relative"
      fontFamily="Roboto"
    >
      <Flex
        flex={{ base: "1", md: "1" }} // Set the flex value for small and medium devices
        direction="row"
        gap={2}
        align="center"
        w='full'
      >
        <BsHouse />
        <Select
          id="categorySelect"
          flex="1" // Ensure the Select occupies the full width
          placeholder="Tipo de propiedad"
          borderWidth="0"
          focusBorderColor="none"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </Flex>

      <Divider
        orientation={dividerOrientation}
        borderColor="rgba(0, 0, 0, 0.1)"
        height={dividerOrientation === "vertical" ? "48px" : undefined}
      />

      <Flex
        flex={{ base: "1", md: "1" }} // Set the flex value for small and medium devices
        direction="row"
        gap={2}
        align="center"
        w='full'
      >
        <RiLayoutMasonryLine/>
        <Select
          id="roomSelect"
          flex="1" // Ensure the Select occupies the full width
          placeholder="Ambientes"
          borderWidth="0"
          focusBorderColor="none"
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </Select>
      </Flex>

      <Divider
        orientation={dividerOrientation}
        borderColor="rgba(0, 0, 0, 0.1)"
        height={dividerOrientation === "vertical" ? "48px" : undefined}
      />

      <Flex
        flex={{ base: "1", md: "1" }} // Set the flex value for small and medium devices
        direction="row"
        gap={2}
        align="center"
        w='full'
      >
        <Text>U$S</Text>
        <Input
          id="minPrice"
          flex="0.9"
          placeholder="Min."
          type="number"
          borderWidth="1"
          focusBorderColor="none"
        />
        <Divider
          flex="0.2"
          orientation="horizontal"
          borderColor="rgba(0, 0, 0, 0.1)"
          alignSelf="stretch"
          my="auto"
        />
        <Input
          id="maxPrice"
          flex="0.9"
          placeholder="Max."
          type="number"
          borderWidth="1"
          focusBorderColor="none"
        />
      </Flex>

      <Divider
        orientation={dividerOrientation}
        borderColor="rgba(0, 0, 0, 0.1)"
      />

      <Button
        onClick={handleSearch}
        colorScheme="blue"
        flex={{ base: "1", md: "0.5" }}
        bg="#090D1D"
        borderRadius="0"
        py="6"
        w='full'
      >
        <Flex
          gap={2}
          justify="center"
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight={300}
          letterSpacing="4.8px"
        >
          <SearchIcon />
          <Text>BUSCAR</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default SearchBar;
