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
        <div>
          {props.price ? <><p className={styles.center}>Starting at </p><p className={styles.price}>${ props.price}</p></> : <><p className={styles.center}>Contact us for contract pricing.</p><p className={styles.price}>{ props.price}</p></>}
        </div>
        <Button onClick={ props.openModal } text='Schedule An Appointment'/>
      </div>
  )
}

export default Card
