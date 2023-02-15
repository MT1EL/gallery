import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { useIsVisible } from "react-is-visible";
import SearchBar from "./components/SearchBar";
function App() {
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState();
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const api =
    "https://api.unsplash.com/photos/random/?client_id=OLWcbKiFu-M6zb6AXwzzpXuxhW-AjoMWA4lCKcn3DiE&per_page=20&count=30&query=";

  useEffect(() => {
    const url = topic ? api + topic : api;
    fetch(url)
      .then((response) => response.json())
      .then((res) => (topic ? setData(res) : setData([...data, ...res])));
  }, [isVisible, topic]);

  if (data.length < 30) {
    return (
      <Box>
        <Navbar />
        <SearchBar setTopic={setTopic} />
        <Text>Loading...</Text>;
        <Box h="1000px" w="20px" />
        <Box bg="red" w="100%" h="10px" ref={ref} opacity="1" />
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />
      <SearchBar setTopic={setTopic} />
      <Body data={data} />

      <Box bg="red" w="100%" h="10px" ref={ref} />
    </Box>
  );
}

export default App;
