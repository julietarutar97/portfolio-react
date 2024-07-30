import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import VerticalContainer from './VerticalContainer'
import Cards from '../../cards/Cards'

const services = () => {

    const cards = [
        <Cards ulrImage={'./icons/iconoUXUI.png'} cardTittle={'Desarrollo web'} info={'Diseño y desarrollo web personalizado para tu negocio.'}>
        </Cards>,
        <Cards ulrImage={'./icons/iconoUXUI.png'} cardTittle={'Desarrollo web'} info={'Diseño y desarrollo web personalizado para tu negocio.'}>
        </Cards>,
        <Cards ulrImage={'./icons/iconoUXUI.png'} cardTittle={'Desarrollo web'} info={'Diseño y desarrollo web personalizado para tu negocio.'}>
        </Cards>,
    ]


  return (
    <Flex width='100%'>
        <VerticalContainer tittle={"Explora los Servicios"} info={"DESCUBRI LA DIVERSIDAD DE SERVICIOS. ¡EXPLORA AHORA Y ENCONTRA LA SOLUCIÓN PERFECTA PARA VOS!"} elements={cards} letterSpacing={'2px'}>
        </VerticalContainer>
    </Flex>
  )
}

export default services
