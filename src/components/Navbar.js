import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import CustomSwitch from "./CustomSwitch";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top="0"
      w="100vw"
      bg={colorMode === "dark" ? "#000" : "#E9E9E9"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems="ceneter"
      py="1em"
      px="3em"
      zIndex={"10"}
      flexDirection={{ base: "column", md: "row" }}
      gap=".5em"
    >
      <Box />
      <Text fontWeight="extrabold" fontSize="1.2em" alignSelf="center">
        Your favorite Gallery
      </Text>
      <Box alignSelf="center">
        <CustomSwitch />
      </Box>
    </Box>
  );
}

export default Navbar;
