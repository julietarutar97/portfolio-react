import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'


const DetalleExperiencias = ({empresa, info, detalle}) => {
  return (
    <Flex direction='column' opacity='0.8' maxWidth='413px'>
        <Box display='flex' direction='row' alignItems='center'>
            <Image src='./icons/iconoCircul.png' width='15px' height='15px'/>
            <Text as='h2' marginLeft='20px' textTransform='uppercase' fontSize='12px' fontWeight='550' fontFamily='nanumGothic.general' letterSpacing='1.5px' lineHeight='40px' >{empresa}
                {/*  font-family: var(--fontDeveloper);
    font-size: var(--font-Sizeh2);
    text-transform: uppercase;
    font-weight: 550;
    width: 520px;   
    margin-bottom: 20px;
    letter-spacing: 1.5px;
    line-height: 40px; */}
                </Text>   
        </Box>
        <Box borderLeft= '1px solid rgba(255,255,255,0.1)' marginLeft='6px' paddingLeft='35px' paddingBottom='20px' marginBottom='10px' 
        >
            <Text as='h3' fontSize='12px' fontWeight='400' letterSpacing='2px' margin='12px 0' textTransform='uppercase' >{info}</Text>
            <Text as='p' fontSize='12px' letterSpacing='0.2px' fontWeight='200' marginTop='2px' >{detalle}
            </Text>
        </Box>
            
    </Flex>
  )
}

export default DetalleExperiencias
