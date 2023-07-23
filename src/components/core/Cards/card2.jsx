import { Box, Image, Flex, Text } from "@chakra-ui/react";

const Card = ({ image, title, description }) => {
  return (
    <Box
      px="15px"
      boxShadow={"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}
      p={"20px 16px"}
      borderRadius={"9px"}
      mx="15px"
    >
      <Box position="relative" maxW="sm">
        <Image src={image} alt={""} borderRadius="md" />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="#000e3978"
          opacity={0}
          transition="opacity 0.3s ease"
          _hover={{ opacity: 1 }}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <Text
          textAlign={"center"}
          pt={"18px"}
          fontFamily={"sans-serif"}
          fontWeight={"700"}
          fontSize={"24px"}
        >
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

const CardList2 = () => {
  const cards = [
    {
      image: "/Floor-cleaning-service.jpg",
      title: "Plumbing Services",
    },
    {
      image: "/Floor-cleaning-service.jpg",
      title: "Electrical Services",
    },
    {
      image: "/Floor-cleaning-service.jpg",
      title: "Fitout Services",
    },
  ];

  return (
    <Flex justify="center" align="center" py={8}
    flexWrap={{base:'wrap',sm:'wrap',md:'wrap',lg:'nowrap'}}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Flex>
  );
};

export default CardList2;
