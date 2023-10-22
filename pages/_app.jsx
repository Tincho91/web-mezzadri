import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import RootLayout from '../layouts/layout'

import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    Ruda: "Ruda, sans-serif",
    Roboto: "Roboto, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp