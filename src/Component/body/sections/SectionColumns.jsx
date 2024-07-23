import React from 'react'
import './sectionsColumns.css'
import leftColumn from './leftColumn'
import { Flex, Box } from '@chakra-ui/react'


const SectionColumns = ({titulo, texto}) => {
  return (
    <Flex direction='row' justifyContent='space-between' textAlign='left' marginRight={100} marginLeft={100} color={'white'}  bgColor={'black'}>
      <Box>
        <h2>{titulo}</h2>
       <p>{texto}</p> 
      </Box>
    </Flex>
  )
}

export default SectionColumns
