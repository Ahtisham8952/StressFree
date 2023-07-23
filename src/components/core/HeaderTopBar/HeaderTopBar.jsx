import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Container,
    chakra,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


export default function HeaderTopBar() {
    const { isOpen, onToggle } = useDisclosure();
    const SocialButton = ({
      children,
      label,
      href,
    }) => {
      return (
        <chakra.button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          as={'a'}
          href={href}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
        </chakra.button>
      );
    };
  
    return (
      <Box bg={"#000e39"}>
        <Container maxW={"container.xl"}>
        <Flex
          color={"#fff"}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          <Flex flex={1} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={"#fff"}>
               <b>Call for help:</b>
               <a href="tel:+12354623257" style={{
                color:"#c2cdeb"
               }}> (+123) 5462 3257</a>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              >
               <b>Mail to us</b> : <a href="mailto:info@eaglestrends.com" style={{
                color:"#c2cdeb"
               }}>info@eaglestrends.com</a>
            </Text>
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
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
          </Stack>
        </Flex>
        </Container>
        
      </Box>
    );
}