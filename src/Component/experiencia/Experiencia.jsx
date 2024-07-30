import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import HorizontalContainer from '../body/sections/HorizontalContainer'
import DetalleExperiencias from './DetalleExperiencias'


const Experiencia = () => {

    const cargaExperiencia =[
      <DetalleExperiencias empresa={"Coding Giants"} info={"Profesora de programación"} detalle={"Doy clases de programación para niños y adolescentes, enseñándoles los fundamentos de la tecnología. En mis clases, los estudiantes aprenden a crear proyectos básicos y a resolver problemas con código."}></DetalleExperiencias>,
        <DetalleExperiencias empresa={"freelancer"} info={"Desarrollo de sistemas internos"} detalle={"desarrolladora de sistemas de reservas para una empresa de alquileres"}></DetalleExperiencias>,
    ]

  return (
    <HorizontalContainer tittle={"Mi experiencia previa"} info={"Tengo una amplia experiencia laboral, trabajo desde adolescente. Fui profesora de danzas españolas, empleada en varios negocios de mi ciudad y gestora de cobranzas para una gran empresa. Acá vas a ver detalles de mis últimas experiencias relacionadas al mundo de desarrolladores"} elements={cargaExperiencia} directionFlex={'column'}>
    </HorizontalContainer>
  )
}

export default Experiencia
