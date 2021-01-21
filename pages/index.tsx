import { Button, ChakraProvider, Heading, Container, Box, Stack, Checkbox} from "@chakra-ui/react";
import customTheme from '../src/custom-theme';

export default function Home() {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      
      <Heading bg="brand.50" variant="h1">NBAplay</Heading>
      <Button>Clique aqui</Button>
      <Container maxW="xxl" centerContent>
      <Box padding="6" bg="brand.700" maxW="6xl">
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team.
      </Box>

      <Stack spacing={10} direction="row">
  <Checkbox colorScheme="red" defaultIsChecked>
    Checkbox
  </Checkbox>
  <Checkbox colorScheme="green" defaultIsChecked>
    Checkbox
  </Checkbox>
</Stack>
</Container>
     
    </ChakraProvider>
  )
}
