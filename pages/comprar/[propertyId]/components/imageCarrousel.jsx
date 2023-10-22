import Slider from "react-slick";
import { Box, Image, IconButton, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      borderRadius={0}
      top="50%"
      right="10px"
      zIndex="10"
      aria-label="Next"
      fontSize='25px'
    />
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      borderRadius={0}
      top="50%"
      left="10px"
      zIndex="10"
      aria-label="Previous"
      fontSize='25px'
    />
  );
};

const ImageCarousel = ({ images = [] }) => {

  if (!images) {
    console.error('Images array is null or undefined');
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <Box position="absolute" bottom="10px" left="50%" transform="translateX(-50%)">
        <Flex justify="center" overflow='hidden'>{dots}</Flex>
      </Box>
    ),
  };

  return (
    <Box position="relative" py={10} w="100%" h="100%">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} position="relative" w="100%" h="100%">
            <Image
              src={image}
              alt={`slide-${index}`}
              height={{ base: "340px", sm: "600px" }}
              maxH='80vh'
              w='100%'
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;

