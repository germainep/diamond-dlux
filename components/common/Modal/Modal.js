import * as React from 'react'
import { createPortal } from 'react-dom'
import styles from '../../../styles/Modal.module.styl'
import ContactForm from '../ContactForm'

const Modal = ( { isVisible, hideModal } ) => {

  return isVisible ? createPortal(
      <React.Fragment>
        <div>
          <div className={ styles.modalOverlay }>
          </div>
          <div className={ styles.modalWrapper }>
            <div className={ styles.modal }>
              <h3>Schedule an Appointment</h3>
              <ContactForm hideModal={hideModal}/>
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.getElementById('__next'),
      )
      : null
}
export default Modal
