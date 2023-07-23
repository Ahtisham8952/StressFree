import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";

const FeedService = () => {
  return (
    <Box
      backgroundImage="url('/feeedback.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment={"fixed"}
      position="relative"
      width="100%"
      height="80vh"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="rgb(0 14 57 / 24%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW={"1320px"}>
          <Flex gap={"45px"}>
            <Flex flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
              <Img src="/user1.png" w={"40%"} />
              <Box>
                <Text color={"white"} textAlign={"center"}>
                  1500
                </Text>
                <Text color={"white"} textAlign={"center"}>
                  Happy Customer
                </Text>
              </Box>
            </Flex>
           <Flex flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
              <Img src="/user1.png" w={"40%"} />
              <Box>
                <Text color={"white"} textAlign={"center"}>
                  1500
                </Text>
                <Text color={"white"} textAlign={"center"}>
                  Happy Customer
                </Text>
              </Box>
            </Flex>
           <Flex flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
              <Img src="/user1.png" w={"40%"} />
              <Box>
                <Text color={"white"} textAlign={"center"}>
                  1500
                </Text>
                <Text color={"white"} textAlign={"center"}>
                  Happy Customer
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
              <Img src="/user1.png" w={"40%"} />
              <Box>
                <Text color={"white"} textAlign={"center"}>
                  1500
                </Text>
                <Text color={"white"} textAlign={"center"}>
                  Happy Customer
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default FeedService;
