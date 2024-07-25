import React from 'react'
import { Divider, Text, Link, Flex, Container, Box, Image} from '@chakra-ui/react'



const DetallesSkills = ({skill, porcentaje }) => {
  return (
    <Flex direction='column' mr='15px' w='386px'>
            
            <Text margin='30px 0 15px 0' letterSpacing='2px' textTransform='uppercase' fontSize='12px'>{skill}</Text>    
            <Box height='3px' width='386px' bg='#181818'>
            <Box  height='8px' mt='2px' bg='#181818' width={porcentaje} >
                <Text ml={porcentaje} mt='-10px' fontSize='10px' letterSpacing='2px'>{porcentaje}</Text>
            </Box>
        </Box>
    </Flex>
  )
}

export default DetallesSkills
