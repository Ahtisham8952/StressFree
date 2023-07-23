import { Box, Flex, Image, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

const CategoryProducts = () => {
  return (
    <>
      <Flex
        p={"34px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"50px"}
        flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
      >
        <Box
       
        >
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Pest Control Services</Text>
        </Box>
        <Box>
          <Img src="/icon3.jpg" m='auto'/>
          <Text 
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Pest Control Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text 
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Deep Cleaning Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text 
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Furniture Cleaning Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text 
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Disinfection & Sanitization Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text 
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >AC Cleaning Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text textAlign={"center"}>Ac Maintenance & Repair</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Curtain Cleaning Services</Text>
        </Box>
        <Box>
          <Img
            src="/icon3.jpg"
            _hover={{
              transform: "scale(1.2)",
              msTransitionTimingFunction: "cubic-bezier(0.47,2.02,.31,-.36)",
            }}
            m="auto"
          />
          <Text
          textAlign={'center'}
          fontFamily={'sans-serif'}
          fontWeight={'300'}
          fontSize={'14px'}
          >Fitout Works</Text>
        </Box>
      </Flex>
    </>
  );
};

export default CategoryProducts;
