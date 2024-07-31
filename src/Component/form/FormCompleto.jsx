import { Divider, Text, Flex, Input, Button, Textarea, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AlertForm from './AlertForm'


const initialValues = {
  nombre: '',
  email: '',
  comentario: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email('Correo no válido').required('Campo requerido'),
  nombre: Yup.string().min(2, 'Nombre no válido').required('Campo requerido'),
  comentario: Yup.string().required('Campo requerido')
})

const FormCompleto = (props) => {

  const form = useRef()
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
      sendEmail()
    },
    validationSchema
  })

  const sendEmail = () => {
    emailjs
      .sendForm('service_ovqbtpd', 'template_bvz8acf', form.current, {
        publicKey: '3pXz4m2yrdotB2cRZ',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setIsSuccess(true)
          formik.resetForm()
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <form onSubmit={formik.handleSubmit} ref={form}>
      <Text as='h4' margin='5px 1px' textTransform='uppercase' letterSpacing='1.44px' fontSize='16px'>
        Tu consulta es bienvenida y valorada
      </Text>
      <Text as='p' fontSize='12px' opacity='0.8' lineHeight='18px' marginTop='12px' marginBottom='12px'>
        Completá los campos para encontrar la solución perfecta para vos.
      </Text>
      <Flex direction='column' alignItems='flex-end'>
        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
          <Input
            placeholder='Email'
            name='email'
            margin='10px 0px'
            color='rgb(245, 245, 245)'
            fontSize='12px'
            border='1px solid rgba(245,245,245,0.2)'
            borderRadius='0px'
            width='408px'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Text fontSize='12px' color='red'>{formik.errors?.email}</Text>
        </FormControl>
        <FormControl isInvalid={formik.touched.nombre && !!formik.errors.nombre}>
          <Input
            placeholder='Nombre'
            name='nombre'
            margin='10px 0px'
            color='rgb(245, 245, 245)'
            fontSize='12px'
            border='1px solid rgba(245,245,245,0.2)'
            borderRadius='0px'
            width='408px'
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
          <Text fontSize='12px' color='red'>{formik.errors?.nombre}</Text>
        </FormControl>
        <FormControl isInvalid={formik.touched.comentario && !!formik.errors.comentario}>
          <Textarea
            placeholder='Comentario'
            name='comentario'
            border='1px solid rgba(245,245,245,0.2)'
            margin='10px 0px'
            fontSize='12px'
            borderRadius='0px'
            width='408px'
            value={formik.values.comentario}
            onChange={formik.handleChange}
          />
          <Text fontSize='12px' color='red'>{formik.errors?.comentario}</Text>
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
          isLoading={formik.isSubmitting}
          type='submit'
          width='40%'
          _hover={{ bg: '#131313' }}
        >
          Enviar mensaje
        </Button>
        
        {isSuccess&&<Text color='green' fontSize='15px'>Recibimos tu mensaje!</Text>}
        
      </Flex>
    </form>
  )
}

export default FormCompleto
