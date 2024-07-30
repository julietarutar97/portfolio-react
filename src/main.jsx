import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, theme } from '@chakra-ui/react'

import Header from './Component/Header/Header.jsx'
import VerticalContainer from './Component/body/sections/VerticalContainer.jsx'
import Hero from './Component/hero/Hero.jsx'
import ServicesSection from './Component/body/sections/ServicesSection.jsx'
import MySkills from './Component/skills/MySkills.jsx'
import Experiencia from './Component/experiencia/Experiencia.jsx'
import ContactForm from './Component/form/ContactForm.jsx'
import Galeria from './Component/galeria/Galeria.jsx'
import Footer from './Component/Footer/Footer.jsx'

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '480px',
  lg: '768px',
  xl: '1024px',
  '2xl': '1280px',
  '3xl': '1440px',
  '4xl': '1920px',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <Header/>
       <Hero />
      <ServicesSection/> 
      <MySkills/>
      <Experiencia/>
      <Galeria/>
      <ContactForm/>
      <Footer/>

    </ChakraProvider>
  </React.StrictMode>,
)
