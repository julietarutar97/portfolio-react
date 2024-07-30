import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, Button} from '@chakra-ui/react'
import HorizontalContainer from '../body/sections/HorizontalContainer'
import Inputs from './Inputs'


import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import FormCompleto from './FormCompleto'

  

const Form = (props) => {
    const elementosForm=[
      <FormCompleto></FormCompleto>
    ]
  return (
    <Flex width='100vw'>
      <HorizontalContainer tittle={"contactame"} info={"¡Hola! Si tienes alguna pregunta o proyecto en mente, estaré encantado/a de escucharte. Completa el formulario y estaré en contacto contigo pronto."} elements={elementosForm} directionFlex={'column'}>
      </HorizontalContainer>
    </Flex>
  )
}

export default Form