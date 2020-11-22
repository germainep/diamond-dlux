import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import styles from '../../styles/Card.module.styl'

const Card = ( props ) => {
  return (
      <div className={ styles.card }>
        <div className={ styles.imageContainer }>
          <Image
              layout='fill'
              src={ props.imagePath }
              alt={ props.alt }
              width={ 621 }
              height={ 350 }
          />
        </div>
        <div className={ styles.textBox }>
          <h3>{ props.title }</h3>
          <p>{ props.description }</p>
        </div>
        <Button onClick={ props.openModal } text='Scheduled An Appointment'/>
      </div>
  )
}

export default Card
