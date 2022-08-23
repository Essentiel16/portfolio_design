import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navigation.css';
import '@fontsource/karla';
import '@fontsource/karla/300.css';
import '@fontsource/karla/500.css';
import '@fontsource/karla/600.css';
import '@fontsource/karla/700.css';
import '@fontsource/karla/800.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
