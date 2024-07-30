import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, Button, Textarea} from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const form = () => {
  

      function validateName(value) {
        let error
        if (!value) {
          error = 'El nombre es obligatorio'
        }
        return error
      }
  return (
    <Formik  onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }} width='100%'>
      
        <Form> 
            <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                
            <Input {...field} placeholder={placeHolder}  margin='10px 0px' color='rgb(245, 245, 245)' fontSize='12px' border='1px solid rgba(245,245,245,0.2)' borderRadius='0px' width='408px' height={altura}/>
            
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          
          
        </Form>
    </Formik>
    
  )
}

export default form
