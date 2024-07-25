import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Heading} from '@chakra-ui/react'

const Cards = ({ulrImage, cardTittle, info}) => {
  return (
    <Flex direction='column' justifyContent='center' border='1px' borderColor='rgba(255, 255, 255, 0.1)' width='271px' ml='10px' mr='15px' alignItems='center' >
        <Image src={ulrImage} w='64px' mt='47px' mb='10px'></Image>
        <Heading as='h4' fontSize='16px' textTransform='uppercase' fontWeight='400' letterSpacing='1.5px' mt='5px' mb='5px'>{cardTittle}</Heading>
        <Text fontSize='12px' mb='45px' ml='22px' mr='22px' mt='4px' textAlign='center'> {info}
        </Text>
    </Flex>
  )
}

export default Cards
