import React from 'react'
import './Header.css'
import { Box, Flex, Image } from '@chakra-ui/react'
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


const Header = () => {
  return (
    <div>
      <Flex direction='row' bgImage='./images/imagenBack.png' bgSize='cover' bgRepeat='no-repeat' bgPos='center' width='100vw' height='100vh' justifyContent='space-around' alignItems='flex-start' >

      
        <Image src='/images/logoIcon.png' alt='imagen Logo' width='200px' objectFit='contain' marginEnd='400px' alignItems='center'/>

        <Menu>
          <MenuButton bg='transparent'
            as={IconButton}
            aria-label='Options' 
            variant='none'
          >
          <img src="/icons/iconMenu.png" alt=""/>
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
      
    </div>
  )
}

export default Header
