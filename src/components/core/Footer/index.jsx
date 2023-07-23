import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"#000e39"}
      color={"#fff"}
      textTransform={"uppercase"}
      minH={"254px"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Box>
              <Heading
                fontSize={"28px"}
                fontWeight={"600"}
                fontFamily={"sans-serif"}
                color={"white"}
              >
                Stress Free
              </Heading>
            </Box>
            <Text
              color={"white"}
              fontWeight={"400"}
              fontFamily={"sans-serif"}
              fontSize={"14px"}
            >
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Link href={"#"} mb={0}>
              Electrical Services
            </Link>
            <Link href={"#"} mb={0}>
              Pest Control
            </Link>
            <Link href={"#"} mb={0}>
              AC Services
            </Link>
            <Link href={"#"} mb={0}>
              Maids Services
            </Link>
          </Stack>
      
          <Stack align={"flex-start"}>
            <Heading fontSize={"20px"}>Official Info</Heading>
            <Text
              fontFamily={"sans-serif"}
              fontWeight={"300"}
              fontSize={"14px"}
            >
              <Text as={"span"} fontWeight={"700"} mr="7px">
                Adress:
              </Text>
              777, Fortune Executive , Canada T, JLT, street
            </Text>
            <Text
              fontFamily={"sans-serif"}
              fontWeight={"300"}
              fontSize={"14px"}
            >
              <Text as={"span"} fontWeight={"700"} mr="7px">
                Phone:
              </Text>
              +971 4 506 1500
            </Text>
            <Text
              fontFamily={"sans-serif"}
              fontWeight={"300"}
              fontSize={"14px"}
            >
              <Text as={"span"} fontWeight={"700"} mr="7px">
                Fax:
              </Text>
              +971 4 422 9823
            </Text>
            <Text
              fontFamily={"sans-serif"}
              fontWeight={"300"}
              fontSize={"14px"}
            >
              <Text as={"span"} fontWeight={"700"} mr="7px">
                Email:
              </Text>
            Admin@admin.com
            </Text>
            <Box>
              <Text fontSize={'24px'} fontFamily={'sans-serif'} fontWeight={'600'}>
                Follow Us 
              </Text>
              <Flex>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              </Flex>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box> */}
    </Box>
  );
}
