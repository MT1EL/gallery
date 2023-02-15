import { Flex, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchBar({ setTopic }) {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    let value = e.target.value;
    setTopic(value);
  };
  return (
    <Flex mt="7em" mx={{ base: "1em", md: "3em", lg: "5em" }}>
      <Select onChange={handleChange} w="auto" placeholder="pick a topic">
        <option value="lamborghini">lamborghini</option>
        <option value="minimalist">minimalist</option>
        <option value="jdm">jdm</option>
        <option value="flower">flower</option>
        <option value="room">room</option>
        <option value="design">design</option>
      </Select>
      {/* <Input
        w="auto"
        placeholder="Search your favorite topic"
        onChange={handleChange}
        onSubmit={setTopic(value)}
      /> */}
    </Flex>
  );
}

export default SearchBar;
