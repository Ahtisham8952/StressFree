import {
  Box,
  Container,
  Flex,
  Img,
  SimpleGrid,
  Text,
  chakra,
} from "@chakra-ui/react";

function Review() {
  return (
    <Box
    backgroundImage="url('bg9.jpg')"
    backgroundSize="cover"
    backgroundPosition="center"
    position="relative"
    width="100%"
    height="100vh"
    py={'100px'}
  >
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgb(0 14 57 / 81%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      opacity={'0.9'}
    >
     <Box>
     <Container maxW={"1550px"} m={"auto"} >
        <Box p={4}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} zIndex={'9999'}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              px={"45px"}
              pt="25px"
              pb="80px"
              bg="white"
              cursor={"pointer"}
            >
              <Flex justifyItems={"center"}>
                <Box w="70px" maxW={"70px"} mr="15px">
                  <Flex
                    borderRadius={"50%"}
                    w={"70px"}
                    h={"70px"}
                    overflow={"hidden"}
                  >
                    <Img src="/dp.jpg" />
                  </Flex>
                </Box>
                <Text mt="15px">
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={"black"}
                  >
                    Jacob Martin
                  </Text>
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                    fontWeight={"300"}
                    textAlign={"left"}
                    color={"black"}
                  >
                    CEO
                  </Text>
                </Text>
              </Flex>
              <Box>
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  textAlign={"left"}
                  lineHeight={"40px"}
                  color={"Black"}
                  my={"30px"}
                  display={"inline-block"}
                >
                  I feel very happy and be proud to connect with this industry.
                  This is a very productive and professional industry company.
                </Text>
              </Box>
              <Box>
                <Img src="/star.png" />
              </Box>
            </Box>

            <Box
              borderWidth="1px"
              borderRadius="lg"
              px={"45px"}
              pt="25px"
              pb="80px"
              bg="white"
              cursor={"pointer"}
            >
              <Flex justifyItems={"center"}>
                <Box w="70px" maxW={"70px"} mr="15px">
                  <Flex
                    borderRadius={"50%"}
                    w={"70px"}
                    h={"70px"}
                    overflow={"hidden"}
                  >
                    <Img src="/dp.jpg" />
                  </Flex>
                </Box>
                <Text mt="15px">
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={"black"}
                  >
                    Jacob Martin
                  </Text>
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                    fontWeight={"300"}
                    textAlign={"left"}
                    color={"black"}
                  >
                    CEO
                  </Text>
                </Text>
              </Flex>
              <Box>
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  textAlign={"left"}
                  lineHeight={"40px"}
                  color={"Black"}
                  my={"30px"}
                  display={"inline-block"}
                >
                  I feel very happy and be proud to connect with this industry.
                  This is a very productive and professional industry company.
                </Text>
              </Box>
              <Box>
                <Img src="/star.png" />
              </Box>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              px={"45px"}
              pt="25px"
              pb="80px"
              bg="white"
              cursor={"pointer"}
            >
              <Flex justifyItems={"center"}>
                <Box w="70px" maxW={"70px"} mr="15px">
                  <Flex
                    borderRadius={"50%"}
                    w={"70px"}
                    h={"70px"}
                    overflow={"hidden"}
                  >
                    <Img src="/dp.jpg" />
                  </Flex>
                </Box>
                <Text mt="15px">
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={"black"}
                  >
                    Jacob Martin
                  </Text>
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize={"12px"}
                    fontWeight={"300"}
                    textAlign={"left"}
                    color={"black"}
                  >
                    CEO
                  </Text>
                </Text>
              </Flex>
              <Box>
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  textAlign={"left"}
                  lineHeight={"40px"}
                  color={"Black"}
                  my={"30px"}
                  display={"inline-block"}
                >
                  I feel very happy and be proud to connect with this industry.
                  This is a very productive and professional industry company.
                </Text>
              </Box>
              <Box>
                <Img src="/star.png" />
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
     </Box>
    </Box>
  </Box>
  );
}

export default Review;
