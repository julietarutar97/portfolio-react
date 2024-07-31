import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import DicNavFooter from './DicNavFooter'

const NavFooter = () => {
    const navigation=[
        <Text>Sobre Mí</Text>,
        <Text>Servicios</Text>,
        <Text>Habilidades</Text>,
        <Text>Experiencia</Text>,
        <Text>Proyectos</Text>,
    ]

    const contacto=[
        <Text>T: +54 3435201236</Text>,
        <Text>E: julietarutar97@gmail.com</Text>,
        <Text>l: julietarutar73</Text>,
    ]

    const ubicacion=[
        <Text>Paraná</Text>,
        <Text>Entre Ríos</Text>,
        <Text>Argentina</Text>,
    ]
  return (
    <Flex direction='row' display={{base:'none', md:'flex'}}>
      <DicNavFooter tittle={'navegación'} elements={navigation}></DicNavFooter>
      <DicNavFooter tittle={'Contacto'} elements={contacto}></DicNavFooter>
      <DicNavFooter tittle={'Ubicación'} elements={ubicacion}></DicNavFooter>
    </Flex>
  )
}

export default NavFooter
