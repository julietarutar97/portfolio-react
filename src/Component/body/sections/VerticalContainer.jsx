import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'


const VerticalContainer = ({tittle, info, elements, directionFlex, letterSpacing, display}) => {
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
    pl={{base:'15px', md:''}}
    pr={{base:'15px', md:''}}
    >
        <Container textAlign='center' width={{base:'100%',md:'568px'}} p='0px' mr={{base:'0px'}} ml={{base:'0px'}}>

            <Text as='h2' 
            fontSize='30px' 
            textTransform='uppercase' 
            letterSpacing={'2px'} 
            fontWeight='450' 
            marginBottom='20px' 
            lineHeight='40px'
            >{tittle}
            </Text>

            <Text as='p' 
            fontSize={{base:'14px',lg:'11px'}} 
            lineHeight={{base:'25px',md:'19px'}} 
            letterSpacing={letterSpacing} 
            width={{base:'100%', md:''}}
            mt='12px' 
            mb='12px' 
            fontWeight='300'
            >{info}</Text>

        </Container>
            <Flex as='section' 
            display={display} 
            flexDirection='row' 
            flexWrap='wrap' 
            justifyContent={justifyContent}
            marginTop='60px'>
                {elements.map((element, index) => (
                    <Box key={index} display='flex' marginTop={marginTop}>
                    {element}
                    </Box>
                     ))}
            </Flex>


        <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='63%' />
    </Flex>
  )
}

export default VerticalContainer
