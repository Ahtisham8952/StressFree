import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ServiceSlider from '../ECO/ServiceSlider'
import Cleaning from '../CleaningService/Cleaning'
import Pakers from '../MoverPakers/Pakers'
const ECOPage = () => {
  return (
    <Container maxW={'1550px'} mb='50px'>
      <Flex
        mt="4px"
        gap={'45px'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box w={{ base: '100%', md: '20%' }} bg="#000e39" textAlign={'center'} minH={'300px'}>
          <Flex
            h="100%"
            justifyContent={'center'}
            alignItems="center"
            color="white"
            fontSize={'24px'}
          >
            Maintenance and Handyman
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '70%' }}>
          <ServiceSlider />
        </Box>
      </Flex>
      <Flex
        mt="40px"
        gap={'45px'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
          <Box w={{ base: '100%', md: '20%' }} bg="#000e39" textAlign={'center'} minH={'300px'}>
          <Flex
            h="100%"
            justifyContent={'center'}
            alignItems="center"
            color="white"
            fontSize={'24px'}
          >
            Cleaning services
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '70%' }}>
         <Cleaning/>
        </Box>
      </Flex>
      <Flex
        mt="100px"
        gap={'45px'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
         <Box w={{ base: '100%', md: '20%' }} bg="#000e39" textAlign={'center'} minH={'300px'}>
          <Flex
            h="100%"
            justifyContent={'center'}
            alignItems="center"
            color="white"
            fontSize={'24px'}
          >
            Movers and Packers
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '70%' }}>
         <Pakers/>
        </Box>
      </Flex>
    </Container>
  )
}

export default ECOPage
