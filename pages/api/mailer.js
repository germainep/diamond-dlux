import nodemailer from 'nodemailer'
import { req, res } from 'express'

require('dotenv').config()

const transporter = nodemailer.createTransport(
    {
      pool: true,
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        type: 'login',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: true
      },
      debug: true
    })
const customerMessage = ( receiver ) => {
  return {
    from: process.env.EMAIL_USER,
    to: receiver,
    subject: 'Thanks for requesting an appointment',
    text: 'Thanks for requesting an appointment, You will be contacted shortly about your' +
        ' appointment.',
    html: `<h2>Thanks for requesting an appointment with Diamond Luxe Mobile Detailing</h2>
           <p> You will be contacted shortly to schedule a date and time for your detailing.</p>
           <p>Thank You have a great day.</p>
`
  }
}
const requestMessage = ( receiver, name, phone, location, vehicleType ) => {
  return {
    from: process.env.EMAIL_USER,
    to: receiver,
    subject: 'New appointment request from ' + name,
    html: `<h2>New appiontment details</h2>
           <ul>
           <li>Customer name: ${ name }</li>
           <li>Phone Number: ${ phone }</li>
           <li> Type of vehicle: ${ vehicleType }</li>
           <li>Location: ${ location }</li>
</ul>
`
  }
}
export default async ( req, res ) => {
  const { contact } = req.body
  const cMessage = customerMessage(contact.email)
  const rMessage = requestMessage('mferrell@diamondluxedetail.com', contact.name, contact.phone,
                                  contact.location, contact.vehicleType)
  try {
    await transporter.sendMail(cMessage, ( err, info ) => {
      if (err) {
        res.error(err)
      }
      res.status(201).json(info)
    })
    await transporter.sendMail(rMessage, ( err, info ) => {
      if (err) {
        res.status(400).error(err)
      }
      res.status(201).json(info)
    })
  } catch (error) {
    res.status(400).error(error)
  }


}

