import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const currencies = ['USDC', 'GBP', 'EUR', 'NGN', 'YEN'];

  return (
    <Box bgColor="black" as="footer" py="14" px={{ base: '5', md: '10', lg: '20' }}>
      {/* <Flex
        flexDir={{ base: 'row', lg: 'row' }}
        pl={{ base: '5', md: '20', xl: '60' }}
        pt="6"
        pb={{ base: '10', lg: '20' }}
        alignItems="center"
      >
        <Text
          lineHeight={{ base: '42px', lg: '72px' }}
          fontSize={{ base: '40', lg: '80' }}
          color="white"
          fontWeight="500"
          letterSpacing={{ md: '-3px' }}
        >
          Save yourself the hassle today.{' '}
          <Box
            transform="rotate(-4deg)"
            display="inline-block"
            bgColor="white"
            px={{ base: '1', lg: '3' }}
            py="1px"
            borderRadius="16px"
            position="relative"
          >
            <Box transform="rotate(2deg)">
              <Text fontSize={{ base: '40', lg: '80' }} color="black" fontWeight="500">
                Embrace
              </Text>
            </Box>
          </Box>{' '}
          {''}
          lightening fast currency swap in minutes, when you need it.
        </Text>
        <Image boxSize={{ base: 'auto', md: '400', lg: 'auto' }} pt={{ md: '20' }} src={images.whiteOrigami} />
      </Flex> */}

      <Flex mb="4" justifyContent="space-between">
        <Text fontSize="xs" color="white">
          © {currentYear} - COPYRIGHT
        </Text>

        {/* <HStack gap="4">
          {currencies.map((currency, index) => (
            <Text key={index} fontSize="xs" color="white">
              {currency}
            </Text>
          ))}
        </HStack> */}
      </Flex>

      <Box bgColor="white" py="3" borderRadius="6px" />
    </Box>
  );
};

export default Footer;
