import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'

const LinkFooter = ({srcImage}) => {
  return (
    <Link
     display='flex'
     justifyContent='center'
     alignItems='center'
     width='50px'
     height='50px'
     color='white'
     border='1px solid  rgba(245, 245, 245, 0.2)'
     borderRadius='50%'
     transition={{bg:'0.3s', color:'0.3s'}}
     cursor='pointer'
     marginLeft='-8px'
    >

    <Image src={srcImage} width={{base:'25px',xl:'15px'}} height='16px'/>
    </Link>
  )
}

export default LinkFooter
