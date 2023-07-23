import React from "react";
import ECOPage from "../src/components/app/ECO/Index";
import BannerSlider from "../src/components/app/ECO/BannerSlider";
import { Box, Flex, Text } from "@chakra-ui/react";
import CategoryCards from "../src/components/app/AllServices/CategoryCards";
import CategoryProducts from "../src/components/app/ProductsName/CategoryProducts";
import WorkFlow from "../src/components/app/HowItWorks/WorkFlow";
import Review from "../src/components/app/Testimonial/Review";
import FeedService from "../src/components/app/FeedBack/FeedService";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <Box>
        <CategoryProducts/>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} my="30px">
        <Text fontSize={"45px"}>Services</Text>
      </Flex>
      <CategoryCards />
      <Box>
        <Text mt='35px'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontFamily={'sans-serif'}
        fontSize={'28px'}
        fontWeight={'700'}
        >
          Service Category
        </Text>
        <ECOPage />
      </Box>
      <Box>
        <WorkFlow/>
      </Box>
     <Box>
      <Review/>
     </Box>
     <Box>
      <FeedService/>
     </Box>
    </>
  );
};

export default Home;
