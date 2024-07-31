import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Grid, GridItem} from '@chakra-ui/react'

const ContainerGaleria = ({href, bgImage, tituloProyecto,descProyecto}) => {
  return (
    <Link display='flex' 
    direction='column' 
    href={href} 
    target='_blank' 
    bgImage={bgImage} 
    marginTop='42px' 
    height={{base:'260px', md:'570px' }}
    bgSize='cover' 
    bgRepeat='no-repeat' 
    bgPosition='center' 
    justifyContent='space-between' 
    cursor='pointer' 
    textDecoration='none' 
    flexBasis='48%'
    alignItems='flex-end'
    color='#131313'
    maxWidth='440px'
    transition='0.2s'
    _hover={{ transform: "scale(1.1)" }}
    >

        <Flex direction='row' justifyContent='space-between' ml='10px' mr='10px' pb='25px' width='100%' letterSpacing='1.5px' textDecoration='none'>

            <Flex direction='column'>
                <Text as='p' opacity='0.8' > {descProyecto}</Text>
                <Text as='h3' textTransform='uppercase'>{tituloProyecto}</Text>
            </Flex>
            
            <Flex>
            <Image src='./icons/iconoFlechaNegro.png' height='40px' transform='rotate(-90deg)' display={{base:'none', md:'flex'}}/>
            </Flex>


        </Flex>
    
    </Link>
  )
}

export default ContainerGaleria
