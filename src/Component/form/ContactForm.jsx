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

  

const Form = (props) => {
    const inputs =[
        <Inputs placeHolder={'Nombre'}></Inputs>,
        <Inputs placeHolder={'Correo electrónico'}></Inputs>,
        <Inputs placeHolder={''} altura={'150px'}></Inputs>, 
        <Button
        mt={4}
        bg='transparent'
        color='white'
        fontWeight='300'
        border='2px solid white'
        fontSize='12px'
        cursor='pointer'
        padding='5px 50px'
        borderRadius='5px'
        isLoading={props.isSubmitting}
        type='submit'
        _hover={{bg:'#131313'}}
      >
        Enviar mensaje
      </Button> 
    ]
  return (
    <>
      <HorizontalContainer tittle={"contactame"} info={"¡Hola! Si tienes alguna pregunta o proyecto en mente, estaré encantado/a de escucharte. Completa el formulario y estaré en contacto contigo pronto."} elements={inputs} directionFlex={'column'}>
      </HorizontalContainer>
    </>
  )
}

export default Form