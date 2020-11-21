import styles from '../../styles/Button.module.styl'

const Button = ( props ) => {
  return (
      <div className={ styles.body }>
        <p>{ props.text }</p>
      </div>
  )
}

export default Button
//TODO: decide what need to go into the button componet
