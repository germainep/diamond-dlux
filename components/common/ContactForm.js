import axios from 'axios'
import Button from './Button'
import styles from '../../styles/Modal.module.styl'
import {useFormik, Form, Field} from 'formik'
import * as Yup from 'yup'

import React, {useState} from 'react'

const ContactForm = (props) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const vehicleType = [ 'Car/SUV', 'Tractor Trailer', 'Fleet Vehicles' ]
  const locations = [ 'Siler City', 'Asheboro', 'Greensboro Triad', 'Danville VA' ]
  const contact = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: "",
      vehicleType: "",
      location: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, "Must be less than 50 characters").required('Required'),
      email: Yup.string().email("This is an invalid email address").required('email' +
                                                                   ' address is' +
                                                              ' required'),
      phone: Yup.string().matches(phoneRegex, "invalid phone Number try" +
          " 000-000-0000 format"),
      vehicleType: Yup.string().required(" Vehicle type is required"),
      location: Yup.string().required("Please choose one off the available" +
                                        " locations")

                                 }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      // axios.post('/api/mailer', {contact}).then((response)=> console.log(response)
      // ).catch((err)=>{console.error(err)})

      props.hideModal()
    },
  })
  const [ status, setStatus ] = useState({})


  return (
      <div>
          <Form>
            <div className={ styles.form }>
              <label htmlFor="name" className="inputLabels"> Name</label>
              <input
                  type='text'
                  className="formInputs"
                  name='name'
                  placeholder='name'
                  onChange={ contact.handleChange }
                  value={contact.values.name}
              />
              {contact.touched.name && contact.errors.name ? (<div>{contact.errors.name}</div> ) : null}

              <label htmlFor='phone' className="inputLabels"> Phone</label>
              <Field
                  type='phone'
                  name='phone'
                  placeholder='phone'
                  onChange={ contact.handleChange }
                  value={contact.values.phone}
              />
              {contact.touched.phone && contact.errors.phone ? (<div>{contact.errors.phone}</div> ) : null}

              <label htmlFor='email' className="inputLabels"> Email</label>
              <Field type='email'
                     className="formInputs"
                     name='email'
                     placeholder='email'
                     onChange={ contact.handleChange }
                     value={contact.values.email}
              />
              {contact.touched.email && contact.errors.email ? (<div>{contact.errors.email}</div> ) : null}

              <label htmlFor='vehicleType' className="inputLabels"> Vehicle Type</label>
              <Feild id='vehicleType'
                      name="vehicleType"
                      className="formInputs"
                      onChange={ contact.handleChange }
                      value={contact.values.vehicleType}
              >
                <option key='none'>--------</option>
                { vehicleType.map(vehicle => <option key={ vehicle }>{ vehicle }</option>) }
              </Feild>
              {contact.touched.vehicleType && contact.errors.vehicleType ? (<div>{contact.errors.vehicleType}</div> ) : null}

              <label htmlFor='location' className="inputLabels"> Location</label>
              <Feild id="location"
                      name='location'
                      className="formInputs"
                      onChange={ contact.handleChange }
                      value={contact.values.location}
              >
                <option key='none'>---------</option>
                { locations.map(location => <option key={ location }>{ location }</option>) }
              </Feild>
              {contact.touched.location && contact.errors.location ? (<div>{contact.errors.location}</div> ) : null}
            </div>

            <div className={ styles.inputButtons }>
              <Button onClick={ contact.handleSubmit } text="Submit"/>
            </div>
          </Form>

      </div>
  )
}

export default ContactForm
