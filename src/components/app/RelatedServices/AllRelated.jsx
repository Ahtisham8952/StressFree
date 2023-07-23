import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardList from "../OverlayCard";
import CallToActionWithVideo from "../AboutUs";
import CardList2 from "../../core/Cards/card2";
import { ChevronDownIcon } from "@chakra-ui/icons";

const AllRelated = () => {
  return (
    <>
      <Box>
        <Container maxW={"1550px"}>
          <Box
            bgImage="url('/header-dubai.avif')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={"100%"}
            h="50vh"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"24px"}
          >
            <Text
              fontFamily={"sans-serif"}
              fontSize={"35px"}
              fontWeight={"700"}
              color={"white"}
            >
              NEw Company Clearning Visit Here
            </Text>
            <Flex gap={'24px'}>
            <Button
              border={"none"}
              fontFamily={"sans-serif"}
              fontSize={"18px"}
              py="12px"
              px={"25px"}
              bg={"#007cfb"}
              colorScheme="#007cfb"
              as={Link}
              href="/servicedetail"
              cursor={'pointer'}
            >
              Book Now
            </Button>
            <Button
              border={"none"}
              fontFamily={"sans-serif"}
              fontSize={"18px"}
              py="12px"
              px={"35px"}
              bg={"#ed6329"}
              colorScheme="#ed6329"
              as={Link}
              href="/servicedetail"
              cursor={'pointer'}
            >
             Qoute
            </Button>
            </Flex>
           
          </Box>
          <Flex justifyContent={"center"} alignItems={"center"} py={"30px"}>
            <Text
              fontFamily={"sans-serif"}
              fontSize={"28px"}
              fontWeight={"700"}
            >
              Related All Services
            </Text>
          </Flex>
          <Box>
            <CardList />
          </Box>
          <Box mt="15px">
            <CardList2 />
          </Box>
          <CallToActionWithVideo />
          <Box>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text color={"black"} fontSize={"24px"}>
                Apartment Cleaning
              </Text>
            </Flex>
            <Flex my={"40px"} justifyContent={"center"} gap={"30px"}
            flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}
            >
              <Img src="/innerimage.jpg" />
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={
                      <ChevronDownIcon color={"white"} fontSize={"24px"} />
                    }
                    w="400px"
                    bg={"#52A4E9 !important"}
                    color={"white"}
                    textAlign={'left'}
                  >
                    Cleaning Service
                  </MenuButton>
                  <MenuList w="400px">
                    <MenuItem p={'15px'} _hover={{bg:'#52A4E9',color:'white'}}>Houe Cleaning</MenuItem>
                    <MenuItem p={'15px'}_hover={{bg:'#52A4E9',color:'white'}}>Carpet Cleaning</MenuItem>
                    <MenuItem p={'15px'}_hover={{bg:'#52A4E9',color:'white'}}>Window Cleaning </MenuItem>
                    <MenuItem p={'15px'}_hover={{bg:'#52A4E9',color:'white'}}>Certaing Cleaning</MenuItem>
                    <MenuItem p={'15px'}_hover={{bg:'#52A4E9',color:'white'}}>Commercial Cleaning</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AllRelated;
