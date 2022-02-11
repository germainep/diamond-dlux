import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  AspectRatio,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'

const ScheduleModal = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <>
      <Modal finalFocusRef={finalFocusRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src='https://orbisx.ca/app/booknow/VSSlM'
              style='border:0px #ffffff none; max-width:2000px;'
              name='OrbisXbookingForm'
              scrolling='yes'
              frameBorder='0'
              marginHeight='0px'
              marginWidth='0px'
              sandbox=''
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
