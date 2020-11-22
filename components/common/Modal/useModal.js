import { useState } from 'react'

const useModal = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  function toggleModal () {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return { isVisible, toggleModal }
}
export default useModal
