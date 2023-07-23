import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export class CategoryCards extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Container maxW={"1660px"}>
          <Flex
            justifyContent={{ base: "center", md: "center" }}
            gap={"25px"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
          >
            <Card maxW="sm"
              as={Link}
              href="/RelatedServices"
              cursor={'pointer'}
            >
              <CardBody p='0px'>
                <Image
                  src="/Handyman5.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  borderWidth={'0px'}
                  borderBottom={'none'}
                />
                <Stack py='24px' spacing="3">
                  <Heading size="md" textAlign={'center'}   >Maintenance and Handyman</Heading>
                </Stack>
              </CardBody>
            
            </Card>
              <Card maxW="sm"
              as={Link}
              href="/RelatedServices"
              cursor={'pointer'}
            >
               <CardBody p='0px'>
                <Image
                  src="/Storage.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack spacing="3">
                  <Heading size="md" textAlign={'center'} py='24px'>Storage</Heading>
                </Stack>
              </CardBody>
           
            </Card>
              <Card maxW="sm"
              as={Link}
              href="/RelatedServices"
              cursor={'pointer'}
            >
               <CardBody p='0px' border={'none'} borderWidth={'none'}>
                <Image
                  src="/PaintingServices.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack spacing="3">
                  <Heading size="md" textAlign={'center'} py='24px'>Painting</Heading>
                </Stack>
              </CardBody>
            
            </Card>
             <Card maxW="sm"
              as={Link}
              href="/RelatedServices"
              cursor={'pointer'}
            >
              <CardBody p={'0px'}>
                <Image
                  src="/cleaners.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
               <Stack spacing="3">
                  <Heading size="md" textAlign={'center'} py='24px'>Pets Control</Heading>
                </Stack>
              </CardBody>
            
            </Card>
          </Flex>
          <Flex
            justifyContent={{ base: "center", md: "center" }}
            gap={"25px"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            mt="28px"
          >
             <Card maxW="sm"
              as={Link}
              href="/RelatedServices"
              cursor={'pointer'}
            >
              <CardBody>
                <Image
                  src="maid.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'center'} alignItems={'center'}>Maids Services</Heading>
                </Stack>
              </CardBody>
             
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="/Plumbing.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'center'} alignItems={'center'}>Plumbing Services</Heading>
                </Stack>
              </CardBody>
             
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="/electrical-system-img.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="58px" spacing="3">
                  <Heading size="md"  alignItems={'center'} textAlign={'center'}>Electrical Services</Heading>
                </Stack>
              </CardBody>
             
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="/Site-Inspection.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" alignItems={'center'} textAlign={'center'}>Fitout Services</Heading>
                </Stack>
              </CardBody>
             
            </Card>
          
          </Flex>
        </Container>
      </>
    );
  }
}

export default CategoryCards;
