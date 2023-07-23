import React, { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  keyframes,
  Flex,
  Button,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

import { motion } from 'framer-motion'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function BannerSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  //   const [slider, setSlider] = React.useState<Slider | null>(0);

  const [slider, setSlider] = useState(0)

  const animationKeyframes = keyframes`
    0% { transform: scale(1)}
    25% { transform: scale(2)}
    50% { transform: scale(1)}
    100% { transform: scale(2)}
  `

  const animation = `${animationKeyframes} 200s ease-in-out infinite`

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // These are the images used in the slide
  const cards = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg',
  ]

  return (
    <Box
      position={'relative'}
      height={'70vh'}
      width={'full'}
      overflow={'hidden'}
      marginTop={'-102px'}
      zIndex={'-1'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <>
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
              animation={animation}
            />
            <Box
              key={index}
              position={'absolute'}
              top={'-30px'}
              color={'white'}
              width={'full'}
              h={'full'}
            >
              <Flex
                align={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                h={'100vh'}
              >
                <Box textAlign={'center'} mb={'6'}>
                  <Box
                    fontSize={'28'}
                    fontWeight={'600'}
                    textTransform={'uppercase'}
                  >
                  Will take your Asssets Company
                  </Box>
                  <Box
                    fontSize={'28'}
                    fontWeight={'600'}
                    textTransform={'uppercase'}
                  >
                    Book or get free quotes for over 25 home services
                  </Box>
                  <Box
                    fontSize={'28'}
                    fontWeight={'600'}
                    textTransform={'uppercase'}
                  >
                    from trusted companies in Dubai
                  </Box>
                </Box>
                <Box>
                  <Button
                    fontSize={'16'}
                    fontWeight={'400'}
                    textTransform={'uppercase'}
                    borderRadius={'20'}
                    paddingLeft={'10'}
                    paddingRight={'10'}
                    paddingTop={'5'}
                    paddingBottom={'5'}
                    mr={'2'}
                    bg={'#f7b000'}
                    color={'#fff'}
                    cursor={'pointer'}
                  >
                    Book Me
                  </Button>
                  <Button
                    fontSize={'16'}
                    fontWeight={'400'}
                    textTransform={'uppercase'}
                    borderRadius={'20'}
                    paddingLeft={'10'}
                    paddingRight={'10'}
                    paddingTop={'5'}
                    paddingBottom={'5'}
                    bg={'#00a6e9'}
                    color={'#fff'}
                    cursor={'pointer'}
                  >
                    Get a Quote
                  </Button>
                </Box>
              </Flex>
            </Box>
          </>
        ))}
      </Slider>
    </Box>
  )
}
