import type { FC } from 'react';

import { Box, Button, Card, Divider, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '@phx/components/logo';
import images from '@phx/images';
import routes from '@phx/routes';

import TokenInfo from './tokenInfo';

interface ComponentProp {
  // eslint-disable-next-line no-undef
  tokenData: Token[];
}

const Header: FC<ComponentProp> = ({ tokenData }) => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <Box position="relative">
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        px={{ base: '4', md: '32' }}
        pt={{ base: '8', md: '16' }}
        pb={{ base: '8', md: '32' }}
        bgColor="blue.100"
        alignItems="center"
        justifyContent="space-between"
        rowGap="8"
        width="100%"
      >
        <Flex flexDir="column" gap="3" flex="1">
          <Button
            variant="white"
            rightIcon={<Image src={images.arrowBendDoubleUpRight} />}
            alignSelf="flex-start"
            textDecor="underline"
          >
            Read more about us on our blog
          </Button>

          <Box>
            <Box lineHeight="1">
              <Text variant="largeText">Swap Tokens To Cash</Text>

              <HStack gap="0">
                <Text variant="largeText">in Under </Text>

                <Box
                  transform="rotate(4deg)"
                  display="inline-block"
                  bgColor="white"
                  px={{ base: '3', lg: '6' }}
                  py="2"
                  borderRadius="50"
                  position="relative"
                >
                  <Box transform="rotate(-5deg)">
                    <Text
                      fontSize={{ base: '40', lg: '70' }}
                      color="black"
                      fontWeight="700"
                      bgGradient="linear(to-r, #2D57E3, #FF7070, #F3F34E)"
                      bgClip="text"
                      position="relative"
                      _after={{
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '4px',
                        bgGradient: 'linear(to-r, #2D57E3, #FF7070, #F3F34E)',
                        bottom: { base: '2px', md: '6px' },
                        left: '0',
                      }}
                    >
                      3 Minutes
                    </Text>
                  </Box>
                </Box>
              </HStack>
            </Box>

            <Box width={{ lg: '60%' }}>
              <Text>
                Experience fast, secure, and hassle-free currency exchange, swapping from Euros, Pounds, and USD to
                Naira with ease.
              </Text>
            </Box>
          </Box>

          <Button
            rightIcon={<Image src={images.swap} />}
            alignSelf="flex-start"
            px="6"
            onClick={() => handleNavigation(routes.main.swap)}
          >
            Swap Now
          </Button>
        </Flex>

        <Card borderRadius="3xl" w={{ base: '100%', md: '500px' }}>
          <Stack spacing="3">
            <Flex flexDir={{ base: 'column-reverse', md: 'row' }} justifyContent="space-between" alignItems="center">
              <Text fontSize="xl">Swap</Text>
              <Logo />
            </Flex>

            <Divider />

            {/* <SwapForm /> */}

            <HStack>
              <Divider />

              <Text variant="status" fontSize="xl">
                Or
              </Text>

              <Divider />
            </HStack>

            <Text variant="status" fontSize="xl" textAlign="center">
              Already have an account?{' '}
              <Link to={routes.auth.signIn}>
                <Text as="span" textDecor="underline" fontWeight="semibold">
                  Login
                </Text>
              </Link>
            </Text>
          </Stack>
        </Card>

        <TokenInfo tokenData={tokenData} />
      </Flex>
    </Box>
  );
};
export default Header;
