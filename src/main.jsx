import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Component/Header/Header.jsx'
import SectionColumns from './Component/body/sections/SectionColumns.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <SectionColumns titulo="Título de la Sección" 
        texto="Este es el texto de la sección."/>
    </ChakraProvider>
  </React.StrictMode>,
)
