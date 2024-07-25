import { extendTheme } from "@chakra-ui/react"
import '@fontsource/nanum-gothic';
import '@fontsource/poppins';
import { color } from "framer-motion";

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