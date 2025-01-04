import { Box, Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

import images from '@phx/images';

const AboutPhoenix = () => {
  return (
    <Box
      py="6"
      bgColor="blue.100"
      my={{ base: '12', md: '22' }}
      mx={{ base: '4', md: '10' }}
      borderRadius="24"
      border="1px dashed #1C1C1C1A"
    >
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        px={{ base: '5', md: '12', lg: '6' }}
        justifyContent="space-between"
        columnGap="20"
        rowGap="8"
        alignItems={{ base: 'right', xl: 'flex-start' }}
      >
        <Flex flexDir="column" justifyContent="flex-start" gap={{ md: '10' }}>
          <Text variant="heading" pb={{ base: '3', md: '5' }} mt="2">
            Who are We?
          </Text>

          <Stack>
            <Stack gap="0" pb={{ base: '3', md: '8' }}>
              <Text
                lineHeight="1"
                letterSpacing={{ lg: '-4px' }}
                fontSize={{ base: '20', md: '30', lg: '70' }}
                // pb={{ base: '6', md: '8' }}
              >
                Quick Swap For{' '}
              </Text>

              <HStack gap="0" alignItems="center">
                <Box
                  transform="rotate(4deg)"
                  display="inline-block"
                  bgColor="white"
                  px={{ base: '1', lg: '8' }}
                  py={{ base: '1', md: '0' }}
                  borderRadius="60"
                  position="relative"
                  w={{ base: '35%', md: '65%' }}
                >
                  <Box transform="rotate(-4deg)">
                    <Text
                      fontSize={{ base: '20', lg: '80' }}
                      color="black"
                      whiteSpace="nowrap"
                      fontWeight="500"
                      position="relative"
                    >
                      Emergency Needs
                    </Text>
                  </Box>
                </Box>
                {/* <Text
                  lineHeight="1"
                  letterSpacing={{ lg: '-4px' }}
                  fontSize={{ base: '20', md: '30', lg: '70' }}
                  pb={{ base: '6', md: '8' }}
                >
                 
                </Text> */}
              </HStack>
            </Stack>

            <Box pr={{ base: '5', md: '12', lg: '32' }}>
              <Text textAlign="justify">
                At Phoenix Finance, we understand that emergencies require quick and dependable solutions. That's why
                we've developed a platform that allows you to seamlessly swap Euros, Pounds, and USD to Naira, ensuring
                you have the funds you need when you need them most.
              </Text>

              <br />
            </Box>
            <Button rightIcon={<Image src={images.swap} />} alignSelf={{ md: 'flex-start' }}>
              Swap Now
            </Button>
          </Stack>
        </Flex>

        <Image src={images.money} />
      </Flex>
    </Box>
  );
};

export default AboutPhoenix;
