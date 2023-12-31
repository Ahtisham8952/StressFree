import React, { useState } from "react";

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
  Image,
  Container,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import HeaderTopBar from "../HeaderTopBar/HeaderTopBar";
// import Logo from "../../../assets/images/logo.png"
const NavItem = [
  {
    label: "Home",
  },
  {
    label: "About Us",
  },
  {
    label: "Services",
  },
  {
    label: "Blogs",
  },
  {
    label: "Contact Us",
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HeaderTopBar />
      <Box>
        <Container maxW={"container.xl"}>
          <Flex
            bg={useColorModeValue("#ffa50000", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", md: "space-between" }}
              align={"center"}
            >
              <Box w={"300px"}>
                <Image src="/stresslogo.png" alt="Stree free logo" />
              </Box>

              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>

            {/* <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack> */}
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} border={0}>
      {NavItem.map((navItem, index) => (
        // console.log("navItem", navItem)
        <Box key={index}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={"#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem?.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NavItem.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

//   const NAV_ITEMS: Array<NavItem> = [
//     {
//       label: 'Inspiration',
//       children: [
//         {
//           label: 'Explore Design Work',
//           subLabel: 'Trending Design to inspire you',
//           href: '#',
//         },
//         {
//           label: 'New & Noteworthy',
//           subLabel: 'Up-and-coming Designers',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Find Work',
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Learn Design',
//       href: '#',
//     },
//     {
//       label: 'Hire Designers',
//       href: '#',
//     },
//   ];
