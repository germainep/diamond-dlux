import React from 'react'
import Image from 'next/image'
import { Box, Center, Heading, Text, useStyleConfig } from '@chakra-ui/react'

const Card = (props) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('Card', { variant })
  return (
    <Box __css={styles} {...rest} maxW={'400'} minW={'300'}>
      <Center>
        <Image
          width='200px'
          height='100%'
          src={props.imagepath}
          alt={props.alt}
        />
      </Center>
      <Box>
        <Heading as='h2' size='lg'>
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
