import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'

const DicNavFooter = ({tittle, elements}) => {
  return (
    <Flex direction='column' fontFamily='Poppins, sans-serif' marginRight='40px' marginLeft='40px' >
      <Flex direction='row' alignItems='center' marginBottom='20px' marginTop='20px'>
        <Text as='h5' fontWeight='300' padding='2px 4px' textTransform='uppercase' color='white' opacity='0.8' bgColor='rgba(245,245,245,0.05)' letterSpacing='1.5px' fontSize='12px'  marginRight='8px'>{tittle}</Text>
        {/* position: relative; */}
        <Divider orientation='horizontal' opacity='0.2' width='80px'></Divider>
      </Flex>
      <Flex direction='column'>
            {elements.map((element, index) => (
                    <Link key={index} as='a' textDecoration='none' cursor='pointer' fontSize={{base:'12px', xl:'9px'}} color='white' letterSpacing='1.5px' lineHeight='18px' opacity='0.8'  _hover={{color:'white', textDecoration:'underline'}} >
                    {element}
                    </Link>
                     ))}
      </Flex>
    </Flex>
  )
}

export default DicNavFooter
