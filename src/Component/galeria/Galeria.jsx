import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'
import ContainerGaleria from './ContainerGaleria'

const Galeria = () => {
  const paddingLeft = useBreakpointValue({ base: '50px', lg:'115px','2xl': '325px'})
  const paddingRight = useBreakpointValue({ base: '50px', lg:'115px', '2xl': '325px' })
  
    const elementGaleria =[
        
    ]
  return (
    
    <Flex bg='#131313' direction='column' alignItems='center' width='100%'>

   
    
    <Flex  direction='column' width='100%' justifyContent='space-between' paddingLeft={paddingLeft} paddingRight={paddingRight} color='white'>
        
        <Box display='flex' flexDirection='column' fontSize='14px' textTransform='uppercase' fontWeight='550' letterSpacing='1.5px'>
            <Text as='p'marginBottom='16px' mt='24px' lineHeight='18px'>algunos proyectos</Text>

            <Text as='p' textAlign='left' marginBottom='16px' opacity='0.8'>Aplicaciones/juegos/sistemas</Text>
        </Box>

        <Flex justifyContent='space-between' flexWrap='wrap' dir='row'  > 

            <ContainerGaleria href={'https://www.behance.net/gallery/123921711/MECANDOC'} bgImage={'./images/appMecandoc.png'} tituloProyecto={'mecandoc'} descProyecto={'Diseño de aplicación móvil'} >
            </ContainerGaleria>

            <ContainerGaleria href={'https://www.behance.net/gallery/123921711/MECANDOC'} bgImage={'./images/appMecandoc.png'} tituloProyecto={'mecandoc'} descProyecto={'Diseño de aplicación móvil'} >
            </ContainerGaleria>

            <ContainerGaleria href={'https://www.behance.net/gallery/123921711/MECANDOC'} bgImage={'./images/appMecandoc.png'} tituloProyecto={'mecandoc'} descProyecto={'Diseño de aplicación móvil'} >
            </ContainerGaleria>
        
        </Flex>
    </Flex>
    <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='63%' />
    </Flex>
  )
}

export default Galeria
