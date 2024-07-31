import React from 'react'
import { Image, Text, Link} from '@chakra-ui/react'

const SocialLinks = ({urlIcono , linkref}) => {
  return (
    <Link  textDecoration='none' color='white' cursor='pointer' target='_blank' href={linkref} marginRight='20px'>
        <Image src={urlIcono} width={{base:'25px', md:'15px'}} height={{base:'26px',md:'16px'}} mb='10px' />
    </Link>
  )
}

export default SocialLinks
