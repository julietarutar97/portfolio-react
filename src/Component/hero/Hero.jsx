import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import VerticalContainer from '../body/sections/VerticalContainer'

const Hero = () => {
    const imagenes =[
        <Image key="image1" src='./images/imagenPerfil1.png' alt='Imagen de perfil' width='300px' marginLeft='-30px' zIndex='2' position='absolute'/>,
        <Image src='./images/imagenPerfil2.jpg' alt='Imagen de perfil' width='450px'  marginRight='200px' marginLeft='200px'  marginTop='70px'/>
    ]
  return (
        <VerticalContainer tittle={"informacion sobre mí, y lo que me gusta hacer"} info={"¡Hola!  Soy  Julieta  Rutar,  una  apasionada  desarrolladora  dedicada  a  brindar  soluciones  digitales  excepcionales.  Con  mi  experiencia  he  perfeccionado  mis  habilidades  y  conocimientos  para  hacer  de  cada  proyecto  un  éxito.  Disfruto  cada  etapa  del  proceso  de  diseño,  desde  la  conceptualización  hasta  la  colaboración  creativa.  Estoy  aquí  para  convertir  tus  ideas  en  realidad  y  llevar  tu  presencia  en  línea  al  siguiente  nivel."} 
        elements={imagenes} directionFlex={'row'}>
        </VerticalContainer>
    
  )
}

export default Hero
