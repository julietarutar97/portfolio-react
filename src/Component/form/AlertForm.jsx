import React,{} from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image, Input, Button, CloseButton} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
  } from '@chakra-ui/react'

const AlertForm = () => {

        const {
          isOpen: isVisible,
          onClose,
          onOpen,
        } = useDisclosure({ defaultIsOpen: true })
      
        return isVisible ? (
          <Alert status='success' maxWidth='200px'>
            <AlertIcon />
            <Box>
              <AlertTitle>Mensaje enviado!</AlertTitle>
              {/* <AlertDescription>
                Recibí tu mensaje, en la brevedad voy a ponerme en contacto. Recordá que podés seguirme en las redes sociales para más información.
              </AlertDescription> */}
            </Box>
            <CloseButton
              alignSelf='flex-start'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        ) : (
          <Button onClick={onOpen} display='none'></Button>
        )
      }


export default AlertForm
