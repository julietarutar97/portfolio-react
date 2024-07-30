import React from 'react'
import './Header.css'
import { Box, Flex, Image, Container, Text, Heading, Spacer, Link, Divider, useBreakpoint, useBreakpointValue} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  
} from '@chakra-ui/react'
import SocialLinks from '../SocialLinks/SocialLinks'
import ContactLinks from '../SocialLinks/ContactLinks'
import theme from '../../resources/theme'
import { bool, boolean } from 'yup'


const Header = () => {

  const display = useBreakpointValue({ base: 'none',md:'none', lg: 'flex' })
  const paddingLeft=useBreakpointValue({base: '25px', '2xl':'85px'})
  const paddingRight= useBreakpointValue({base: '25px', '2xl':'85px'})
  const widthImage = useBreakpointValue({base: '85px', })
  const marginLeft = useBreakpointValue({base: '50px', xl:'295px'})


  let Contact=[
    {
      "tittle":"Email: ",
      "info": " julietarutar97@gmail.com"
    },
    {
      "tittle":"Teléfono: ",
      "info": " +543435201236"
    },
    {
      "tittle":"Ubicación: ",
      "info": " Paraná, Entre Ríos"
    },
  ]
  let SocialMedia = [
    { 
      "urlIcono":"./icons/linkedinIcon.svg", 
      "linkref" : "https://www.linkedin.com/in/julietarutar73",
    },
    {
      "urlIcono":"./icons/gitIcon.svg", 
      "linkref" : "https://www.linkedin.com/in/julietarutar73",
    },
    {
      "urlIcono":"./icons/behanceIcon.svg", 
      "linkref" : "https://www.linkedin.com/in/julietarutar73",
    },
    {
      "urlIcono":"./icons/gmailIcon.svg", 
      "linkref" : "https://www.linkedin.com/in/julietarutar73",
    },
]


  return (
    
      <Flex direction='column' bgImage='./images/imagenFondo.jpg' bgSize='cover'  bgPos='center' alignItems='flex-start' fontFamily='poppins.general' color='white'>

        <Flex direction='row' justifyContent='space-between' mt='10px' pr={paddingRight} pl={paddingLeft} width='100%'> 
            <Image src='/images/logoIcon.png' alt='imagen Logo' width='13%' objectFit='contain' alignItems='center'/>

            <Menu>
              <MenuButton bg='transparent'
                as={IconButton}
                aria-label='Options' 
                variant='none'
              >
              <Flex direction='row' alignItems='center'>   
                <Image src="/icons/iconMenu.png" alt="Icono de menú desplegable" mr='10px'/>
                <Text fontSize='14px' fontWeight='100'>Menú</Text>
              </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem >
                  New Tab
                </MenuItem>
                <MenuItem>
                  New Window
                </MenuItem>
                <MenuItem>
                  Open Closed Tab
                </MenuItem>
                <MenuItem>
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
        </Flex>

        <Box mt='150px' ml={marginLeft} justifyContent='center'>
          <Image src='/icons/iconSection1.svg'  width='28px' mb='15px'/>
          <Text as='b' fontSize='18px' textTransform='uppercase'>Bienvenido !</Text>
          <Flex direction='row' alignItems='center' mb='15px'>
          <Text as='h1'  fontSize='7xl'fontFamily='nanumGothic.general' marginRight='10px' >Soy</Text>
          <Text as ='b' fontSize='7xl'fontFamily='nanumGothic.general'fontWeight='medium'>Desarrolladora</Text>
          </Flex>
          <Text opacity='0.8' fontSize='18px'>Convierto lo complejo en simple</Text>
          <Flex direction='row' letterSpacing='1.5px' textTransform='uppercase' alignItems='center' mt='20px' >
          <Image src='/icons/contactIcon.png'  width='28px' mr='10px'/>
          <Text opacity='0.8' fontSize='12px'>Contactame</Text>
          </Flex>
        </Box>


        <Flex direction='row' marginBottom='30px' opacity='0.8'> 

          {/* Iconos redes izquierda */}
          <Flex ml='22px' direction='column' alignItems='center'>
            {SocialMedia.map( (social, index) => (
              <SocialLinks key={index} urlIcono={social.urlIcono} linkref={social.linkref}> </SocialLinks>
            ))
            }
            <Divider orientation='vertical' height='36px' marginTop='8px' marginBottom='8px' marginRight='20px' display={display} />
            
            <Flex display={display}>

            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>S</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>E</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>G</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>U</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>I</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>M</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px' marginRight='20px'>E</Text>
            </Flex>
          </Flex>

          <Flex as='section' direction='row' alignItems='flex-end' marginLeft='230px' fontSize='10px'>
          {Contact.map( (social, index) => (
              <ContactLinks key={index} tittle={social.tittle} info={social.info}> </ContactLinks>
            ))
            }
          </Flex>

          <Flex as='section' display={display} direction='row' paddingLeft='250px' alignItems='flex-end' fontSize='12px'>
          {SocialMedia.map( (social, index) => (
              index<3 && <SocialLinks key={index} urlIcono={social.urlIcono} linkref={social.linkref} > </SocialLinks >
            ))
            }
          </Flex>
        </Flex>
      </Flex>
      
  )
}

export default Header
