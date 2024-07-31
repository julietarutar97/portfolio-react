import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'
import LinkFooter from './LinkFooter'


const SocialMediaFooter = () => {
  const justifyContent= useBreakpointValue({base:'center', md:'center',lg:'center'})
  const alignItems=useBreakpointValue({base:'center',md:'center', lg:'center'})
  return (
    <Flex direction='column' alignItems={alignItems} >
      <Flex justifyContent={justifyContent}>
        <Image src='./images/logoIcon.png' width={{base:'50%',xl:'28%'}} marginTop='2px'/>
      </Flex>
      <Flex direction='row' marginTop='20px' justifyContent={justifyContent} alignItems={alignItems}>
      
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'} href={'www.linkedin.com/in/julietarutar73'}></LinkFooter>
            <LinkFooter srcImage={'./icons/gitIcon.svg'}href={'https://github.com/julietarutar97'} ></LinkFooter>
            <LinkFooter srcImage={'./icons/behanceIcon.svg'} href={'https://www.behance.net/julietarutar'}></LinkFooter>
            <LinkFooter srcImage={'./icons/gmailIcon.svg'} href={'mailto:julietarutar97@gmail.com'}></LinkFooter>
      </Flex>
    </Flex>
  )
}

export default SocialMediaFooter
