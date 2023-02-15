import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import { createApi } from "unsplash-js";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomModal from "./CustomModal";
function Body({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImage, setCurrentImage] = useState();

  const handleClick = (props) => {
    const unsplash = createApi({
      accessKey: "OLWcbKiFu-M6zb6AXwzzpXuxhW-AjoMWA4lCKcn3DiE",
    });
    let url = props[0];
    let alt = props[1];

    unsplash.photos
      .trackDownload({ downloadLocation: url })
      .then((res) => saveAs(res.response.url, alt));
  };
  return (
    <Box mx={{ base: "1em", md: "3em", lg: "5em" }} mt="2em">
      <Grid
        mx="auto"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(5, 1fr)",
        }}
        gap={{ base: "0.5em", sm: "1em", md: "1.5em" }}
        gridAutoRows="500px"
        gridAutoFlow="dense"
        maxW="2000px"
      >
        {data.map((item) => (
          <GridItem
            key={item.id}
            colSpan={
              item.width > 5000
                ? { base: 1, md: 2, lg: 3 }
                : item.width > 3000 && { base: 1, md: 2 }
            }
            rowSpan={item.height > 4000 && 1.5}
            position="relative"
            role="group"
          >
            <Img
              src={item.urls.regular}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="5px"
            />
            <Flex
              onClick={() => {
                setCurrentImage(item.urls.regular);
                onOpen();
              }}
              position="absolute"
              inset="0 0 0 0"
              bg="rgba(0, 0, 0, 0.5)"
              display="none"
              cursor="pointer"
              _groupHover={{ display: "block" }}
            >
              <Flex
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  size="2x"
                  onClick={() =>
                    handleClick([
                      item.links.download_location,
                      item.alt_description,
                    ])
                  }
                />
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <CustomModal isOpen={isOpen} onClose={onClose} url={currentImage} />
    </Box>
  );
}

export default Body;
