import React from 'react'
import './Header.css'
import { Box, Flex, Image, Container, Text, Heading, Spacer, Link, Divider} from '@chakra-ui/react'
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


const Header = () => {

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
    <div>
      <Flex direction='column' bgImage='./images/imagenBack.png' bgSize='cover' bgRepeat='no-repeat' bgPos='center' width='100vw' alignItems='flex-start' fontFamily='poppins.general' color='white'>

        <Flex direction='row' justifyContent='space-around' width='100%' spacing='240px'> 
            <Image src='/images/logoIcon.png' alt='imagen Logo' width='200px' objectFit='contain' alignItems='center'/>

            <Menu>
              <MenuButton bg='transparent'
                as={IconButton}
                aria-label='Options' 
                variant='none'
              >
              <Flex direction='row' alignItems='center'>   
                <Image src="/icons/iconMenu.png" alt="Icono de menú desplegable" mr='10px'/>
                <Text fontSize='12px'>Menú</Text>
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

        <Box mt='150px'  width='100%' ml='295px' justifyContent='center'>
          <Image src='/icons/iconSection1.svg'  width='28px' mb='15px'/>
          <Text as='b' fontSize='2xl'>Bienvenido !</Text>
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


        <Flex direction='row'>

          {/* Iconos redes izquierda */}
          <Flex ml='22px' direction='column' alignItems='center'>
            {SocialMedia.map( (social, index) => (
              <SocialLinks key={index} urlIcono={social.urlIcono} linkref={social.linkref}> </SocialLinks>
            ))
            }
            <Divider orientation='vertical' height='36px' marginTop='8px' marginBottom='8px'/>
            
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>S</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>E</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>G</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>U</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>I</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>M</Text>
            <Text letterSpacing='0.35px' fontWeight='550' fontSize='12px' mb='10px'>E</Text>
          </Flex>

          <Box>

          </Box>

          <Box>

          </Box>
        </Flex>
      </Flex>
      
    </div>
  )
}

export default Header
