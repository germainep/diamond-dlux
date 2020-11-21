import { createPortal } from 'react-dom'
import Button from '../Button'

const Modal = ( { isVisible, hideModal } ) => {
  return isVisible ? createPortal(
      <div c>
        <div>
          <h3>Schedule an Appiontment</h3>
          <form onSubmit={ }>
            <label for="name">
              <input/>
            </label>
            <Button/>
            <Button onClick={ hideModal } text="Close"/>
          </form>
        </div>
      </div>,
      document.body,
      )
      : null
}
export default Modal
