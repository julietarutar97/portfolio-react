import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import LinkFooter from './LinkFooter'


const SocialMediaFooter = () => {
  return (
    <Flex direction='column' alignItems='flex-start'>
      <Flex>
        <Image src='./images/logoIcon.png' width='28%' marginTop='2px'/>
      </Flex>
      <Flex direction='row' marginTop='20px' justifyContent='center'>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
            <LinkFooter srcImage={'./icons/linkedinIcon.svg'}></LinkFooter>
      </Flex>
    </Flex>
  )
}

export default SocialMediaFooter
