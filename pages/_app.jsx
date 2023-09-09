import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootLayout from '../layouts/layout'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp