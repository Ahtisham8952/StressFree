import { Box, Button, Flex, Image, Img, Link, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const FlokEventsData = [
  {
    image:
      "/Movingbox.jpg",
    Title: "Box Packing",
  },
  {
    image:
      "/Movingbox.jpg",
    Title: "Box Packing",
  },
  {
    image:
      "/Movingbox.jpg",
    Title: "Box Packing",
  },
  {
    image:
      "/Movingbox.jpg",
    Title: "Box Packing",
  },
  {
    image:
      "/Movingbox.jpg",
    Title: "Box Packing",
  },
];

export default class Pakers extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box position={"relative"} mt={"26px"}>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
          zIndex={"99"}
          top="35%"
          left="20px"
          bg="white"
          p="10px"
        >
          <Button
            justifyContent={"center"}
            px="0px"
            bg="transparent"
            colorScheme={"transparent"}
            onClick={this.previous}
          >
            <ChevronLeftIcon color="black" />
          </Button>
        </Box>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"center"}
          right="20px"
          top="35%"
          zIndex={"99"}
          bg="white"
          p="10px"
        >
          <Button
            justifyContent={"center"}
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme={"transparent"}
          >
            <ChevronRightIcon color="black" />
          </Button>
        </Box>
        <Box w="100%" mx="auto">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {FlokEventsData.map((li, index) => (
              <Box key={index} px="10px">
                <Box bg="#FFFFFF" border={"1px solid black"} p="20px">
                  <Box mb="10px">
                    <Image alt="img" w="100%" src={li.image}></Image>
                  </Box>
                  <Box>
                    <Text
                      color="#1F1F1F"
                      fontSize="24px"
                      fontWeight="700"
                      lineHeight={"34px"}
                      textAlign="center"
                    >
                      {li.Title}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  }
}
