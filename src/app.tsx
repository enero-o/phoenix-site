import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './globalStyles.tsx';
import './index.css';
import { ApolloWrapper } from './gql/provider.tsx';
import MainLayout from './layouts/main.tsx';
import Landing from './pages';
import { theme } from './themes/index.ts';

function App() {
  return (
    <ApolloWrapper>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="" element={<Landing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloWrapper>
  );
}

export default App;
