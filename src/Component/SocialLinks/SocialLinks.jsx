import React from 'react'
import { Image, Text, Link} from '@chakra-ui/react'

const SocialLinks = ({urlIcono , linkref}) => {
  return (
    <Link  textDecoration='none' color='white' cursor='pointer' target='_blank' href={linkref}>
        <Image src={urlIcono} width='15px' height='16px' mb='10px'/>
    </Link>
  )
}

export default SocialLinks
