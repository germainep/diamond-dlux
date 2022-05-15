import React from 'react'
import {
  Image,
  Box,
  Center,
  Heading,
  Text,
  useStyleConfig,
} from '@chakra-ui/react'

const Card = (props) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('Card', { variant })
  return (
    <Box __css={styles} {...rest} maxW={'400'} overflow='hidden'>
      <Center>
        <Image
          boxSize='270px'
          fit='cover'
          height='100%'
          src={props.imagepath}
          alt={props.alt}
        />
      </Center>
      <Box>
        <Heading as='h3' size='lg' align='center'>
          {props.title}
        </Heading>
        <Text as='p' size='md'>
          {props.description}
        </Text>
      </Box>
    </Box>
  )
}

export default Card
