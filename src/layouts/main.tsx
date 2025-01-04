import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import MainNavbar from '@phx/components/mainNavbar';

const MainLayout = () => {
  return (
    <Box h="100vh" position="relative" bg="blue.100">
      <MainNavbar />
      <Flex
        flexDir= 'column'
        alignItems="center"
        justify='start'
        px="4"
        pt={{ base: "2.5rem", md: "4.5rem"}}
        rowGap="10"
        h="calc(100vh - 4.5rem)"
        bg="blue.100"
        overflowY="auto"
      >
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout;
