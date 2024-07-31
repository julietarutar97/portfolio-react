import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, useBreakpointValue} from '@chakra-ui/react'
import ContainerGaleria from './ContainerGaleria'

const Galeria = () => {
  const paddingLeft = useBreakpointValue({ base: '50px', lg:'115px','2xl': '325px'})
  const paddingRight = useBreakpointValue({ base: '50px', lg:'115px', '2xl': '325px' })
  
    const elementGaleria =[
        
    ]
  return (
    
    <Flex bg='#131313' direction='column' alignItems='center' width='100%' id='proyectos'> 

   
    
    <Flex  direction='column' width='100%' justifyContent='space-between' paddingLeft={paddingLeft} paddingRight={paddingRight} color='white'>
        
        <Box display='flex' flexDirection='column' fontSize='14px' textTransform='uppercase' fontWeight='550' letterSpacing='1.5px'>
            <Text as='p'marginBottom='16px' mt='24px' lineHeight='18px'>algunos proyectos</Text>

            <Text as='p' textAlign='left' marginBottom='16px' opacity='0.8'>Aplicaciones/juegos/sistemas</Text>
        </Box>

        <Flex justifyContent='space-between' flexWrap='wrap' direction={{base:'column', sm:'row'}}  > 

            <ContainerGaleria href={'https://www.behance.net/gallery/123921711/MECANDOC'} bgImage={'./images/appMecandoc.png'} tituloProyecto={'mecandoc'} descProyecto={'Diseño de aplicación móvil'} color={'#131313'} >
            </ContainerGaleria>

            <ContainerGaleria href={'https://github.com/pato-1441/alquileresTemporales'} bgImage={'./images/alquileres.png'} tituloProyecto={'Alquileres temporarios'} descProyecto={'Software para empresa de alquileres'}color={'#131313'}  >
            </ContainerGaleria>

            <ContainerGaleria href={'https://github.com/pato-1441/caballerosCalabozosDragones'} bgImage={'./images/juegocdc.png'} tituloProyecto={'caballeros, dragones y calabozos'} descProyecto={'Juego'} color={'white'} >
            </ContainerGaleria>
        
        </Flex>
        <Flex
         height='75px'
         width='100%'
         display='flex'
         alignItems='center'
         justifyContent='center'
         alignContent='center'
         mt='25px'
        >
           <Link
           textDecoration='none'
           textTransform='uppercase'
           cursor='pointer'
           border=' 1px solid white'
           p='10px 30px'
           color='rgba(255, 255, 255,0.9)'
           fontSize='10px'
           fontWeight='400'
           letterSpacing='1px'
           href='https://github.com/julietarutar97'
           target='_blank'>
           Ver más
           </Link>
          
        </Flex>
    </Flex>
    <Divider  orientation='horizontal' marginBottom='85px' marginTop='85px' opacity='0.1' width='63%' />
    </Flex>
  )
}

export default Galeria
