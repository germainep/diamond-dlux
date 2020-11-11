import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Card.styl'

const Card = ( props ) => {
  return (
      <div>
        <div className={ styles.cardBody }>
          <div className={ styles.cardImageContainer }>
            <Image
                src={ props.imagePath }
                alt={ props.alt }
                width={ 250 }
                height={ 200 }
            />
          </div>
          <div className={ styles.textbox }>
            <h1 className={ styles.title }>{ props.title }</h1>
            <p className={ styles.description }>{ props.description }</p>
          </div>
        </div>
      </div>
  )

}

export default Card
