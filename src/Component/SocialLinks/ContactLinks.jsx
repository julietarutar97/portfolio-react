import React from 'react'
import { Divider, Text, Link, Flex} from '@chakra-ui/react'

const ContactLinks = ({tittle, info}) => {
  return (
    <Flex as='section' direction='row' alignItems='center' justifyContent='space-between' width='180px'>

    <Divider orientation='vertical' height='19px' marginTop='8px' marginLeft='23px' marginRight='14px'/>

    <Text as='b'>{tittle}</Text>
    <Text>{info}</Text>
   
    </Flex>
  )
}

export default ContactLinks
