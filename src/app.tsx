import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './globalStyles.tsx';
import './index.css';
import { ApolloWrapper } from './gql/provider.tsx';
import Landing from './pages';
import { theme } from './themes/index.ts';

function App() {
  return (
    <ApolloWrapper>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloWrapper>
  );
}

export default App;
