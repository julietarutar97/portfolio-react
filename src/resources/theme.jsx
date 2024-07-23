import { extendTheme } from "@chakra-ui/react"
import '@fontsource/nanum-gothic';
import '@fontsource/poppins';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },

  fonts: {
    nanumGothic: {general: 'Nanum Gothic'}, 
    poppins: {general: 'Poppins'},
  }

  
})

export default theme