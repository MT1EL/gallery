import { Box, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
function CustomSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [checked, setChecked] = useState(false);
  return (
    <Box
      bg="#fff"
      w="60px"
      h="30px"
      borderRadius="15px"
      display="flex"
      alignItems="center"
      onClick={() => {
        setChecked((prev) => !prev);
        toggleColorMode();
      }}
      cursor="pointer"
      justifyContent={"space-around"}
      position="relative"
    >
      <FontAwesomeIcon icon={faSun} color="black" />
      <Box
        w="28px"
        h="28px"
        bg={colorMode === "dark" ? "#000" : "#E9E9E9"}
        borderRadius="50%"
        left={checked ? "30px" : "1px"}
        transition="300ms ease"
        position="absolute"
        zIndex="2"
      />
      <FontAwesomeIcon icon={faMoon} color="black" />
    </Box>
  );
}

export default CustomSwitch;
