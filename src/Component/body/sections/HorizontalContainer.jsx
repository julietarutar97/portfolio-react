import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, useBreakpointValue } from '@chakra-ui/react'

const HorizontalContainer = ({ tittle, info, elements, directionFlex }) => {
  const paddingLeft = useBreakpointValue({ base: '50px', lg: '50px', xl: '200px' })
  const paddingRight = useBreakpointValue({ base: '50px', lg: '50px', xl: '200px' })
  const paddingTop = useBreakpointValue({ base: '25px', lg: '0px', xl: '0px' })
  const justifyContent = useBreakpointValue({ base: 'space-between', lg: 'space-around' })
  const flexDirection = useBreakpointValue({ base: 'column', lg: 'row' })
  const width = useBreakpointValue({ base: '240px', lg: '520px' })
  
  return (
    <Flex 
      as='section' 
      justifyContent='center' 
      fontFamily='Poppins, sans-serif' 
      bg='#131313' 
      color='white' 
      direction='column' 
      alignItems='center' 
      width='100%'
    >
      <Flex 
        direction={flexDirection} 
        justifyContent='center'
        textAlign={{ base: 'center', lg: 'left' }}  
        alignItems='center'
        width='100%' 
        paddingLeft={paddingLeft} 
        paddingRight={paddingRight}
      >
        <Box 
          display='flex' 
          flexDirection='column'  
          w={width}
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <Text 
            as='h2' 
            fontSize='30px' 
            textTransform='uppercase' 
            letterSpacing={'2px'} 
            fontWeight='450' 
            marginBottom='20px' 
            lineHeight='40px' 
            mt='24px'
          >
            {tittle}
          </Text>
          <Text 
            as='p' 
            lineHeight='20px' 
            fontSize={{ base: '15px', xl: '12px' }}
            opacity='0.8'
            width={{ base: '400px', xl: '240px' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {info}
          </Text>
        </Box>

        <Box 
          as='section' 
          display='flex' 
          flexDirection={directionFlex} 
          flexWrap='nowrap'  
          alignItems='flex-end'
          paddingTop={paddingTop}

        >
          {elements.map((element, index) => (
            <Box key={index} display='flex'>
              {element}
            </Box>
          ))}
        </Box>
      </Flex>

      <Divider  
        orientation='horizontal' 
        marginBottom='85px' 
        marginTop='85px' 
        opacity='0.1' 
        width='63%' 
      />
    </Flex>
  )
}

export default HorizontalContainer
