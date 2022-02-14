import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'

const ScheduleModal = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <>
      <Modal finalFocusRef={finalFocusRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h='80%' w='90%'>
          <ModalBody
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src='https://orbisx.ca/app/booknow/VSSlM'
              style='width: 100%; height: 100%'
              name='OrbisXbookingForm'
              sandbox='allow-scripts allow-forms'
              allowFullscreen
          />`,
            }}
          />
          <ModalFooter>
            <ModalCloseButton onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ScheduleModal
