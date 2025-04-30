import { type FC, useState } from 'react';

import { Box, Button, Flex, HStack, Image, Link, Text } from '@chakra-ui/react';
import { MenuIcon, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import images from '@phx/images';
import routes from '@phx/routes';

interface NavItems {
  name: string;
  href?: string;
}

const navItems: NavItems[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us' },
  { name: 'How it works' },
  { name: 'Contact Us' },
];

interface ComponentProps {
  isAuth?: boolean;
}

const Navbar: FC<ComponentProps> = ({ isAuth }) => {
  const [open, setOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <Flex
      alignItems="center"
      position="sticky"
      px={{ base: '4', md: '24' }}
      py="3"
      top="0"
      zIndex="10"
      bgColor={isAuth ? 'white.600' : 'white.200'}
      justifyContent={isAuth ? 'center' : 'space-between'}
      gap="2"
      borderBottom="1px dashed"
      borderColor="gray.100"
      h="4.5rem"
    >
      <Link href="/">
        <Image src={images.logo} alt="lyte" h={{ base: '12', md: '14' }} w="auto" />
      </Link>

      {/* <HStack
        display={isAuth ? 'none' : { base: 'none', lg: 'flex' }}
        justifyContent="space-between"
        px="5"
        py="2"
        gap="10"
      >
        {navItems.map((item) => (
          <Link
            fontWeight={pathname === item.href ? 'bold' : '500'}
            _hover={{ textDecoration: 'none', color: 'purple.200' }}
            key={item.name}
            href={item.href}
            color={pathname === item.href ? 'purple.200' : 'gray.500'}
            _activeLink={{ color: 'purple.200' }}
          >
            {item.name}
          </Link>
        ))}
      </HStack> */}

      <HStack spacing="4" display={isAuth ? 'none' : 'flex'}>
        <Link href={routes.auth.signIn} target="_blank">
          <Button variant="outline">Login</Button>
        </Link>

        <Link href={routes.auth.signUp} target="_blank">
          <Button display={{ base: 'none', lg: 'inline-flex' }} borderRadius="full" py="0">
            Create Account
          </Button>
        </Link>
      </HStack>

      <Box cursor="pointer" display={isAuth ? 'none' : { base: 'block', lg: 'none' }} onClick={() => setOpen(!open)}>
        {open ? <X /> : <MenuIcon />}
      </Box>

      {open && (
        <Box
          position="absolute"
          top="4.5rem"
          left="0"
          bgColor="white.200"
          zIndex="9999"
          w="100%"
          pl="4"
          minH="calc(100vh - 4.5rem)"
          overflowY="auto"
        >
          {navItems.map((item) => (
            <Link key={item.name} color="dark" href={item.href} display="block" py="3">
              <Text fontSize="lg">{item.name}</Text>
            </Link>
          ))}

          <Link color="dark" href={routes.auth.signUp} display="block" py="3">
            <Text fontSize="lg">Create Account</Text>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
