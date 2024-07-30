import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'
import SocialMediaFooter from './SocialMediaFooter'
import NavFooter from './NavFooter'


const Footer = () => {
  const flexDirection=useBreakpointValue({ base: 'row', lg: 'column'})
  const justifyContent = useBreakpointValue ({base: 'center',md:'center', lg:'center'})
    return (
      <Flex direction='column' alignContent='center' justifyContent={justifyContent}  bg="#131313" alignItems='center'>
        <Flex direction='row' wrap='wrap' textAlign='left' justifyContent={justifyContent} margin='0 45px'>
          <SocialMediaFooter></SocialMediaFooter>
          <NavFooter></NavFooter>
        </Flex>
        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='63%' />
      </Flex>
    )
  }
  
  export default Footer
  