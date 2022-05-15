import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const ScheduleModal = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <>
      <Modal finalFocusRef={finalFocusRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h='80%' w='90%'>
          <ModalBody></ModalBody>
          <ModalFooter>
            <ModalCloseButton onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ScheduleModal
