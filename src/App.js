import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './partials/header/Header';
import Home from './views/homeView/Home';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App;
