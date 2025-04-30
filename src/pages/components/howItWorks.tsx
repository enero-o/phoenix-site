import { Box, Card, Flex, Image, Stack, Text } from '@chakra-ui/react';

import images from '@phx/images';

const HowItWorks = () => {
  return (
    <Card
      border="1px dashed #1C1C1C1A"
      outlineOffset="10px"
      mx={{ base: '4', md: '24' }}
      borderRadius="16"
      pb="16"
      my="16"
    >
      <Stack spacing="12" mb={{ md: '14' }}>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          rowGap="3"
          alignItems="center"
          justifyContent="space-between"
          mx="4"
        >
          <Text variant="subHeading">How It Works</Text>
          {/* 
          <Button variant="demo" rightIcon={<Image src={images.demo} />}>
            Watch Video Demo
          </Button> */}
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }} gap="10" mx={{ base: '5', md: '10' }}>
          {howData.map((item, index) => (
            <Stack key={index} spacing="5" w="xs" p="4">
              <Image src={item.logo} w={20} h={20} />
              <Box>
                <Text variant="subHeading" textAlign="start">
                  {item.title}
                </Text>

                <Text variant="status" fontSize="sm" noOfLines={3}>
                  {item.description}
                </Text>
              </Box>
            </Stack>
          ))}
        </Flex>
      </Stack>
    </Card>
  );
};

export default HowItWorks;

const howData = [
  {
    title: 'Deposit',
    logo: images.selectToken,
    description: 'Lyte generates wallets ETH and TRON wallets for you on, using our MPC wallet technology',
  },
  {
    title: 'Swap',
    logo: images.phxWallet,
    description: 'Lyte generates wallets ETH and TRON wallets for you on, using our MPC wallet technology',
  },
  {
    title: 'Send',
    logo: images.sendToken,
    description: 'Lyte generates wallets ETH and TRON wallets for you on, using our MPC wallet technology',
  },
  {
    title: 'Withdraw',
    logo: images.withdraw,
    description: 'Lyte generates wallets ETH and TRON wallets for you on, using our MPC wallet technology',
  },
];
