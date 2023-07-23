// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/rajdhani"
import { mynewtheme } from '../src/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import { useState } from 'react'
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';

const queryClient = new QueryClient()
function Flok({ Component, pageProps }) {

  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <LayoutWrapper>


        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>


  )
}

export default Flok