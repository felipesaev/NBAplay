import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923'  
    }
  },
  components: {
    Heading: {
      variants: {
        h1: { color: 'brand.100'}
      }
    },
    Button: {
      defaultProps: {variant: 'primary'},
      variants: {
        primary: {
          bg: 'brand.100',
          border: 'brand.600',
          color: 'brand.800',
          _hover: { bg: 'brand.200'}          
        },
        outline: {
          bg: 'transparent',
          color: 'brand.300',
          borderColor: 'brand.700',
          _hover: { borderColor: 'brand.900', boxShadow: '0'},
        }
      }
    }
  }
})

export default customTheme;