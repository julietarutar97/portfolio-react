import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'
import HorizontalContainer from '../body/sections/HorizontalContainer'
import DetallesSkills from './DetallesSkills'

const MySkills = () => {

    const cargaHabilidades =[
        <DetallesSkills skill={'C#'} porcentaje={'90%'}>
        </DetallesSkills>,

        <DetallesSkills skill={'JAVA'} porcentaje={'80%'}>
        </DetallesSkills>,  

        <DetallesSkills skill={'FIGMA'} porcentaje={'60%'}>
        </DetallesSkills>, 
        <DetallesSkills skill={'HTML'} porcentaje={'80%'}>
        </DetallesSkills>, 
        <DetallesSkills skill={'CSS'} porcentaje={'70%'}>
        </DetallesSkills>, 
    ]
  return (
    <HorizontalContainer tittle={"Mis habilidades"} info={"Acá vas a encontrar algunos de los lenguajes de programacion que uso y otras herramientas de diseño de estrategias"} elements={cargaHabilidades} directionFlex={'column'}>
    </HorizontalContainer>
  )
}

export default MySkills
