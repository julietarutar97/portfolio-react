import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'
import LinkFooter from './LinkFooter'


const SocialMediaFooter = () => {
  const justifyContent= useBreakpointValue({base:'', md:'center',lg:'center'})
  const alignItems=useBreakpointValue({base:'flex-start',md:'center', lg:'center'})
  return (
    <Flex direction='column' alignItems={alignItems} >
      <Flex justifyContent={justifyContent}>
        <Image src='./images/logoIcon.png' width='28%' marginTop='2px'/>
      </Flex>
      <Flex direction='row' marginTop='20px' justifyContent={justifyContent} alignItems={alignItems}>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
      </Flex>
    </Flex>
  )
}

export default SocialMediaFooter
