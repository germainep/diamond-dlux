import * as React from 'react'
import { createPortal } from 'react-dom'
import Button from '../../common/Button'
import styles from '../../../styles/Modal.module.styl'

const Modal = ( { isVisible, hideModal } ) => {
  return isVisible ? createPortal(
      <React.Fragment>
        <div>
          <div className={ styles.modalOverlay }>
            <div className={ styles.modalWrapper }>
              <div className={ styles.modal }>
                <h3>Schedule an Appiontment</h3>
                <form onSubmit={ () => {console.log('testing submit')} }>
                  <label>
                    <input/>
                  </label>
                  <Button onClick={ () => {console.log('submit')} } text="Submit"/>
                  <Button onClick={ hideModal } text="Close"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.getElementById('__next'),
      )
      : null
}
export default Modal
