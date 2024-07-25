import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'


const VerticalContainer = ({tittle, info, elements, directionFlex}) => {
  return (
    <Flex as='section' paddingTop='80px' justifyContent='center' fontFamily='Poppins, sans-serif' bg='#131313' color='white' direction='column' alignItems='center'>
        <Container textAlign='center'>
            <Text as='h2' fontSize='30px' textTransform='uppercase' letterSpacing='1px' fontWeight='semibold' marginBottom='20px' lineHeight='40px'>{tittle}</Text>
            <Text as='p' fontSize='12px'  opacity='0.8' lineHeight='19px' >{info}</Text>
            <Box as='section' display='flex' flexDirection={directionFlex} flexWrap='wrap' marginTop='60px'>
                {elements.map((element, index) => (
                    <Box key={index}>
                    {element}
                    </Box>
                     ))}
            </Box>
        </Container>
        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='1215px' />
    </Flex>
  )
}

export default VerticalContainer
