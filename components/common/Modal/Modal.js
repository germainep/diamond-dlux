import * as React from 'react'
import { createPortal } from 'react-dom'
import Button from '../../common/Button'
import { useState } from 'react'
import styles from '../../../styles/Modal.module.styl'
import axios from 'axios'

const Modal = ( { isVisible, hideModal } ) => {
  const vehicleType = [ 'Car/SUV', 'Tractor Trailer', 'Fleet Vehicles' ]
  const locations = [ 'Siler City', 'Asheboro', 'Greensboro Triad', 'Danville VA' ]
  const [ contact, setContact ] = useState(
      { name: '', email: '', phone: '', vehicleType: '', location: '' })
  const [ status, setStatus ] = useState({})
  const changeHandler = event => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }
  const handleSubmit = async ( event ) => {
    event.preventDefault()
    axios({
            method: 'post',
            url: 'http://localhost:3000/api/mailer',
            data: contact
          })
        .then(res => {
          if (res.status) {
            setStatus({ success: true })
          }
        })
        .catch(err => {
          console.error(err.message ? err.message : 'Unknown error')
        })
    console.log(contact)
  }
  return isVisible ? createPortal(
      <React.Fragment>
        <div>
          <div className={ styles.modalOverlay }>
          </div>
          <div className={ styles.modalWrapper }>
            <div className={ styles.modal }>
              <h3>Schedule an Appointment</h3>
              <form className="form" onSubmit={ handleSubmit }>

                <label htmlFor="name" className="inputLabels"> Name</label>
                <input type='text' className="formInputs" name='name' placeholder='name'
                       onChange={ changeHandler }/>

                <label htmlFor='phone' className="inputLabels"> Phone</label>
                <input type='phone' name='phone' placeholder='phone' onChange={ changeHandler }/>

                <label htmlFor='email' className="inputLabels"> Email</label>
                <input type='email' className="formInputs" name='email' placeholder='email'
                       onChange={ changeHandler }/>

                <label htmlFor='vehicleType' className="inputLabels"> Vehicle Type</label>
                <select id='vehicleType' name="vehicleType" className="formInputs"
                        onChange={ changeHandler }>
                  <option key='none'>--------</option>
                  { vehicleType.map(vehicle => <option key={ vehicle }>{ vehicle }</option>) }
                </select>

                <label htmlFor='location' className="inputLabels"> Location</label>
                <select id="location" name='location' className="formInputs"
                        onChange={ changeHandler }>
                  <option key='none'>---------</option>
                  { locations.map(location => <option key={ location }>{ location }</option>) }
                </select>

                <Button onClick={ handleSubmit } text="Submit"/>
                <Button onClick={ hideModal } text="Close"/>
              </form>
            </div>
            </div>
          </div>
      </React.Fragment>,
      document.getElementById('__next'),
      )
      : null
}
export default Modal
