import { Img, Modal, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
import React from "react";

function CustomModal({ url, isOpen, onClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent m="0" alignSelf="center" mx="1em">
        <Img src={url} />
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
