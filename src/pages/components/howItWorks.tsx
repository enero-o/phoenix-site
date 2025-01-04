import { Box, Button, Card, Flex, Image, Stack, Text } from '@chakra-ui/react';

import images from '@phx/images';

const HowItWorks = () => {
  return (
    <Card border="1px dashed #1C1C1C1A" outlineOffset="10px" mx={{ base: '4', md: '24' }} borderRadius="16" pb="16">
      <Stack spacing="12" mb={{ md: '14' }}>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          rowGap="3"
          alignItems="center"
          justifyContent="space-between"
          mx="4"
        >
          <Text variant="subHeading">How It Works</Text>

          <Button variant="demo" rightIcon={<Image src={images.demo} />}>
            Watch Video Demo
          </Button>
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }} gap="10" mx={{ base: '5', md: '10' }}>
          {howData.map((item, index) => (
            <Stack key={index} spacing='5'>
              <Image src={item.logo} w={20} h={20} />
              <Box>
                <Text variant="subHeading" textAlign='start'>{item.title}</Text>
                <Text variant="status" fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur. Lacus in sit vitae aliquam. Leo lobortis at feugiat vivamus.
                  Donec elit eget nec{' '}
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
  { title: 'Select A Token', logo: images.selectToken },
  { title: 'Get Your PHX Wallet', logo: images.phxWallet },
  { title: 'Send Token', logo: images.sendToken },
  { title: 'Withdraw Funds', logo: images.withdraw },
];
