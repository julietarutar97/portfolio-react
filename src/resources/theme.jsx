import { extendTheme } from "@chakra-ui/react"
import '@fontsource/nanum-gothic';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { color } from "framer-motion";

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

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#131313',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    gray:{
      700: '#131313'
    },
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
   
  },

  fonts: {
    nanumGothic: {
      general: 'Nanum Gothic'
    }, 
    poppins: {
      general: 'Poppins'
    },

    body: 'Poppins, sans-serif',
  },

  fontWeights: {
    semibold: 600,
  },
  
  
})

export default theme