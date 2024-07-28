import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'


const HorizontalContainer = ({tittle, info, elements, directionFlex}) => {
  return (
    <Flex as='section' justifyContent='center' fontFamily='Poppins, sans-serif' bg='#131313' color='white' direction='column' alignItems='center' w='100vw'>
        <Flex direction='row' justifyContent='space-evenly' textAlign='left'  w='100vw'>
            <Box display='flex' flexDirection='column'  w='240px'>
            <Text as='h2' fontSize='30px' textTransform='uppercase' letterSpacing={'2px'} fontWeight='450' marginBottom='20px' lineHeight='40px' w='520px' mt='24px'>{tittle}</Text>
                <Text as='p' lineHeight='20px' textAlign='left' fontSize='12px' opacity='0.8'>{info}</Text>
            </Box>
            <Box as='section' display='flex' flexDirection={directionFlex} flexWrap='nowrap' width='401px' alignItems='flex-start'>
                {elements.map((element, index) => (
                    <Box key={index} display='flex'>
                    {element}
                    </Box>
                     ))}
            </Box>
        </Flex>
        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='1215px' />
    </Flex>
  )
}

export default HorizontalContainer

