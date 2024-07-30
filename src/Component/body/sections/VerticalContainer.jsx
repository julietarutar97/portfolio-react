import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'


const VerticalContainer = ({tittle, info, elements, directionFlex, letterSpacing}) => {
  const justifyContent = useBreakpointValue({base: 'center', lg:''})
  const marginTop = useBreakpointValue({base: '25px', lg:''})

  return (
    <Flex as='section' 
    paddingTop='80px' 
    justifyContent='center'
    fontFamily='Poppins, sans-serif' 
    bg='#131313' 
    color='white'
    direction='column' 
    alignItems='center' 
    w='100%' 
    >
        <Container textAlign='center' w='568px' p='0px'>

            <Text as='h2' fontSize='30px' textTransform='uppercase' letterSpacing={'2px'} fontWeight='450' marginBottom='20px' lineHeight='40px'>{tittle}</Text>

            <Text as='p' fontSize='11px' lineHeight='19px' letterSpacing={letterSpacing} mt='12px' mb='12px' fontWeight='300'>{info}</Text>

        </Container>
            <Box as='section' 
            display='flex' 
            flexDirection='row' 
            flexWrap='wrap' 
            justifyContent={justifyContent}
            marginTop='60px'>
                {elements.map((element, index) => (
                    <Box key={index} display='flex' marginTop={marginTop}>
                    {element}
                    </Box>
                     ))}
            </Box>


        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='63%' />
    </Flex>
  )
}

export default VerticalContainer
