import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);
  const [typedInput, setTypedInput] = useState("");

  const [secondSelectedOption, setSecondSelectedOption] = useState(null);
  const [secondTypedInput, setSecondTypedInput] = useState("");

  const [selectedUnitType, setSelectedUnitType] = useState(null);
  const [selectedHomeSize, setSelectedHomeSize] = useState(null);

  const handleUnitTypeSelect = (type) => {
    setSelectedUnitType(type);
  };

  const handleHomeSizeSelect = (size) => {
    setSelectedHomeSize(size);
  };

  const unitOptions = [
    { name: "Apartment", sizes: ["Studio", "1 BR", "2 BR", "3 BR", "4 BR"] },
    { name: "Villa", sizes: ["2 BR", "3 BR", "4 BR", "5 BR"] },
    { name: "Office", sizes: [] },
    { name: "Other", sizes: [] },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (event) => {
    setTypedInput(event.target.value);
  };

  const handleSecondOptionSelect = (option) => {
    setSecondSelectedOption(option);
  };

  const handleSecondInputChange = (event) => {
    setSecondTypedInput(event.target.value);
  };

  const CustomDatePickerInput = ({ value, onClick }) => (
    <Input
      value={value}
      onClick={onClick}
      width="100%"
      placeholder="Select a date"
      border="none"
      borderRadius="none"
      borderBottom="1px solid green"
    />
  );

  return (
    <Box maxW="1580px" px="20px" mx="auto" mb="100px">
      <Flex gap="40px" h="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Box
          w={{ base: "100%", lg: "60%" }}
          bg="white"
          borderRadius="30px"
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
        >
          <Box>
            <Image 
            borderTopLeftRadius="30px"
              borderTopRightRadius="30px"
              h="150px"
              w="100%"
              objectFit="cover"
              src="https://servicemarket.imgix.net/dist/css/img/service/local-movers/moving.jpg?auto=format,compress&q=46"
            />
          </Box>
          <Box p="20px">
            <Text
              color="black"
              fontSize="14px"
              fontWeight="600"
              lineHeight="150%"
            >
              About our home moving service
            </Text>
            <Text
              color="black"
              fontSize="14px"
              fontWeight="300"
              lineHeight="150%"
            >
              Get up to 5 free quotes from top movers and packers by filling out
              this short form.
            </Text>
            <Box mt="30px">
              <Text
                color="black"
                fontSize="14px"
                fontWeight="600"
                lineHeight="150%"
              >
                Are you moving within the same country or internationally?
              </Text>
              <Box>
                <Box padding="4" mb="20px">
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="150%"
                  >
                    When do you need to move?
                  </Text>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    customInput={<CustomDatePickerInput />}
                  />
                  <br />
                </Box>
                <Box>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="150%"
                  >
                    Where are you moving from?
                  </Text>
                </Box>
                <Flex gap="20px" flexDirection={{ base: "column", md: "row" }}>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <Menu pt="0px">
                      <MenuButton
                        border="none"
                        display="flex"
                        w="100%"
                        borderRadius="none"
                        borderBottom="1px solid green"
                        as={Box}
                        padding="4"
                      >
                        <Flex
                          justifyContent="space-between"
                          w="100%"
                          alignItems="center"
                        >
                          Dubai
                          <ChevronDownIcon />
                        </Flex>
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => handleOptionSelect("Dubai")}>
                          Dubai
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOptionSelect("Abu Dhabi")}
                        >
                          Abu Dhabi
                        </MenuItem>
                        <MenuItem onClick={() => handleOptionSelect("Sharjah")}>
                          Sharjah
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <Box p="20px">
                      <Input
                        mb="0px"
                        border="none"
                        borderRadius="none"
                        borderBottom="1px solid green"
                        value={typedInput}
                        onChange={handleInputChange}
                        placeholder="Enter a Location"
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Box>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="150%"
                  >
                    Where are you moving to?
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  gap="20px"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <Menu pt="0px">
                      <MenuButton
                        border="none"
                        display="flex"
                        w="100%"
                        borderRadius="none"
                        borderBottom="1px solid green"
                        as={Box}
                        padding="4"
                      >
                        <Flex
                          justifyContent="space-between"
                          w="100%"
                          alignItems="center"
                        >
                          Abu Dhabi
                          <ChevronDownIcon />
                        </Flex>
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => handleSecondOptionSelect("Dubai")}
                        >
                          Dubai
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleSecondOptionSelect("Abu Dhabi")}
                        >
                          Abu Dhabi
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleSecondOptionSelect("Sharjah")}
                        >
                          {" "}
                          Sharjah
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box p="20px" w={{ base: "100%", md: "50%" }}>
                    <Input
                      mb="0px"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid green"
                      value={secondTypedInput}
                      onChange={handleSecondInputChange}
                      placeholder="Enter Location"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="20px">
            <Box>
              <Text
                color="black"
                fontSize="14px"
                fontWeight="600"
                lineHeight="150%"
              >
                What is the type of the unit you live in?
              </Text>
            </Box>
            <Flex gap={{ base: "8px", md: "20px" }} mt="10px">
              {unitOptions.map((option) => (
                <Box
                  key={option.name}
                  as="button"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="30px"
                  bg={
                    selectedUnitType === option.name ? "green.500" : "gray.200"
                  }
                  color={selectedUnitType === option.name ? "white" : "black"}
                  p="10px"
                  border="1px solid black"
                  onClick={() => handleUnitTypeSelect(option.name)}
                >
                  <Text>{option.name}</Text>
                </Box>
              ))}
            </Flex>
            {selectedUnitType && (
              <Box mt="20px">
                <Text
                  color="black"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="150%"
                >
                  What is the size of your home?
                </Text>
                <Flex gap="20px" mt="10px">
                  {unitOptions
                    .find((option) => option.name === selectedUnitType)
                    .sizes.map((size) => (
                      <Box
                        key={size}
                        as="button"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50%"
                        bg={
                          selectedHomeSize === size ? "green.500" : "gray.200"
                        }
                        color={selectedHomeSize === size ? "white" : "black"}
                        p="10px"
                        onClick={() => handleHomeSizeSelect(size)}
                      >
                        <Text>{size}</Text>
                      </Box>
                    ))}
                </Flex>
              </Box>
            )}
          </Box>
          <Box mt="20px" p="20px">
            <Text
              mb="8px"
              color="black"
              fontSize="14px"
              fontWeight="600"
              lineHeight={"150%"}
            >
              Please describe the job in as much detail as possible (Optional)
            </Text>
            <Textarea
              placeholder="Please describe the job in as much detail as possible..."
              size="md"
              resize="vertical"
              minHeight="100px"
            />
          </Box>
        </Box>
        <Box
          p="30px"
          w={{ base: "100%", lg: "40%" }}
          bg="white"
          borderRadius="30px"
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
          h="400px"
        >
          <Box mb="20px" pb="10px" borderBottom={"1px solid black"}>
            <Text
              color="black"
              fontSize="24px"
              fontWeight="400"
              lineHeight={"150%"}
            >
              Summary
            </Text>
          </Box>
          <Box>
            <Text
              color="black"
              fontSize="14px"
              fontWeight="400"
              lineHeight={"150%"}
            >
              Service Details
            </Text>
          </Box>
          <Box>
            <Box mb="10px">
              {selectedDate && (
                <Flex justifyContent={"space-between"}>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="150%"
                  >
                    Date
                  </Text>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="300"
                    lineHeight="150%"
                  >
                    {selectedDate.toDateString()}
                  </Text>
                </Flex>
              )}
            </Box>
            <Box>
              {selectedOption && (
                <Box>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="21px"
                  >
                    Moving From
                  </Text>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="300"
                    lineHeight="21px"
                  >
                    {selectedOption}
                  </Text>
                </Box>
              )}
            </Box>
            <Box
              mb="10px"
              color="black"
              fontSize="14px"
              fontWeight="300"
              lineHeight="150%"
            >
              {typedInput}
            </Box>
            <Box>
              {secondSelectedOption && (
                <Box>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="150%"
                  >
                    Moving To
                  </Text>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontWeight="300"
                    lineHeight="150%"
                  >
                    {secondSelectedOption}
                  </Text>
                </Box>
              )}
            </Box>

            <Box
              color="black"
              fontSize="14px"
              fontWeight="300"
              lineHeight="150%"
            >
              {secondTypedInput}
            </Box>
            {selectedUnitType && selectedHomeSize && (
              <Flex mt="20px" justifyContent={"space-between"}>
                <Text
                  color="black"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="150%"
                >
                  Type of Home
                </Text>
                <Text
                  color="black"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="150%"
                >
                  {`${selectedUnitType} - ${selectedHomeSize}`}
                </Text>
              </Flex>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ServiceForm;
