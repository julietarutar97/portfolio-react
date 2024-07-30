import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, Button, Textarea} from '@chakra-ui/react'
import { Formik, Field, Form, useField, useFormik } from 'formik'
import * as Yup from 'yup'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import Inputs from './Inputs'


const initialValues ={
    nombre: '',
    email: '',
    comentario:''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Correo no valido').required('Campo requerido'),
    nombre: Yup.string().min(2, 'Nombre no válido').required('Campo requerido'),
    comentario: Yup.string().required('Campo requerido')
})


const FormCompleto = (props) => {
    

    const onSubmit = (values) => {}

    const {handleChange, errors} = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log(errors)

  return (
    <Formik  onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }} width='100%'>
      
        <Form> 

            <Text as='h4' margin='5px 1px' textTransform='uppercase' letterSpacing='1.44px' fontSize='16px'>Tu consulta es bienvenida y valorada</Text>
            <Text as='p' fontSize='12px' opacity='0.8' lineHeight='18px' marginTop='12px' marginBottom='12px'>Completá los campos para encontrar la solución perfecta para vos.</Text>
        <Flex direction='column' alignItems='flex-end'>
            
              <FormControl>
                <Input placeholder='Email'  name='email' margin='10px 0px' color='rgb(245, 245, 245)' fontSize='12px' border='1px solid rgba(245,245,245,0.2)' borderRadius='0px' width='408px' onChange={handleChange}/>
                <Text color='red' fontSize='9px'>{errors?.email}</Text>
            </FormControl>
            <FormControl>
                <Input placeholder='Nombre'  name='nombre' margin='10px 0px' color='rgb(245, 245, 245)' fontSize='12px' border='1px solid rgba(245,245,245,0.2)' borderRadius='0px' width='408px' onChange={handleChange}/>
                <Text color='red' fontSize='9px'>{errors?.nombre}</Text>
            </FormControl>

            <FormControl>
                <Textarea border='1px solid rgba(245,245,245,0.2)' name='comentario' margin='10px 0px'fontSize='12px'  borderRadius='0px' width='408px' onChange={handleChange}></Textarea>
                <Text color='red' fontSize='9px'>{errors?.comentario}</Text>
            </FormControl>
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
                    width='40%'
                    _hover={{bg:'#131313'}}
                >
                    Enviar mensaje
                </Button> 
                </Flex>
                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
              

          
          
        </Form>
    </Formik>
)}

export default FormCompleto
