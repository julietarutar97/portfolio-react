import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, theme } from '@chakra-ui/react'

import Header from './Component/Header/Header.jsx'
import SectionColumns from './Component/body/sections/SectionColumns.jsx'
import VerticalContainer from './Component/body/sections/VerticalContainer.jsx'
import Hero from './Component/hero/Hero.jsx'
import ServicesSection from './Component/body/sections/ServicesSection.jsx'
import MySkills from './Component/skills/MySkills.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <Header/>
      <Hero />
      <ServicesSection/>
      <MySkills/>
    </ChakraProvider>
  </React.StrictMode>,
)
