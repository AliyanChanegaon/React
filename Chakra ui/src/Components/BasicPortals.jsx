import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  Box
} from "@chakra-ui/react";
import React from "react";

function BasicPortals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Here is where modal title goes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Box>Hello</Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// function BasicPortals() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();

//   console.log(isOpen, onOpen, onClose);
//   return (
//     <>
//       <>
//         <Button colorScheme="red" onClick={onOpen}>
//           Clicking on this will open alert dialog
//         </Button>

//         <AlertDialog
//           isOpen={isOpen}
//           leastDestructiveRef={cancelRef}
//           onClose={onClose}
//         >
//           <AlertDialogOverlay>
//             <AlertDialogContent>
//               <AlertDialogHeader fontSize="lg" fontWeight="bold">
//                 This is title when the alert dialog opens
//               </AlertDialogHeader>

//               <AlertDialogBody>Alert Dialog Body comes here</AlertDialogBody>

//               <AlertDialogFooter>
//                 <Button ref={cancelRef} onClick={onClose}>
//                   Cancel
//                 </Button>
//                 <Button colorScheme="red" onClick={onClose} ml={3}>
//                   Delete
//                 </Button>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialogOverlay>
//         </AlertDialog>
//       </>
//     </>
//   );
// }

export default BasicPortals;
