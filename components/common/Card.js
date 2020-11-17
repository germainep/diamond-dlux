import React from 'react'
import Image from 'next/image'
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
        <div className={ styles.textbox }>
          <h3 className={ styles.title }>{ props.title }</h3>
          <p className={ styles.description }>{ props.description }</p>
          </div>
        </div>
  )

}

export default Card
