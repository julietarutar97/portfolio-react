import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'


const HorizontalContainer = ({tittle, info, elements}) => {
  return (
    <Flex as='section' justifyContent='center' fontFamily='Poppins, sans-serif' bg='#131313' color='white' direction='column' alignItems='center' w='100vw'>
        <Flex direction='row' justifyContent='space-around' textAlign='left'  w='100vw'>
            <Box display='flex' flexDirection='column'  w='240px'>
            <Text as='h2' fontSize='30px' textTransform='uppercase' letterSpacing={'2px'} fontWeight='450' marginBottom='20px' lineHeight='40px' w='520px'>{tittle}</Text>
                <Text as='p' lineHeight='18px' textAlign='left' fontSize='12px'>{info}</Text>
            </Box>
            <Box>
                {elements}
            </Box>
        </Flex>
        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='1215px' />
    </Flex>
  )
}

export default HorizontalContainer

