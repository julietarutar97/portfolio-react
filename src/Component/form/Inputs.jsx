import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, Button, Textarea} from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'



const Inputs = ({placeHolder, nombreInput,handleChange}) => {

  return (
    <Input placeholder={placeHolder}  name={nombreInput} margin='10px 0px' color='rgb(245, 245, 245)' fontSize='12px' border='1px solid rgba(245,245,245,0.2)' borderRadius='0px' width='408px' onChange={handleChange}/>
  )
}

export default Inputs
