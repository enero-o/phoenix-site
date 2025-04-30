import { useState } from 'react';

import { Box, Button, Card, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import images from '@lyte/images';

const Faq = () => {
  const [isToggleArray, setIsToggleArray] = useState(Array(faqInfo.length).fill(false));

  const handleToggle = (index) => {
    setIsToggleArray((prev) => prev.map((isToggled, i) => (i === index ? !isToggled : isToggled)));
  };

  return (
    <Stack mx={{ base: '4', md: '16' }} my={{ md: '10' }}>
      <Card my={{ md: '8' }}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text variant="header" fontSize="2xl">
            FAQ
          </Text>

          <Button variant="demo" color="blue.500">
            Contact Support
          </Button>
        </HStack>
      </Card>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} my="6" mx={{ base: '2', md: '8' }}>
        {faqInfo.map((item, index) => (
          <Card key={index}>
            <HStack my="6" mx="2" spacing="8" justifyContent="space-between" alignItems="flex-start">
              <Stack spacing="3">
                <Text variant="faqHeader">{item?.title}</Text>

                <Box maxH={isToggleArray[index] ? 'auto' : '0'} overflow="hidden" transition="0.3s ease">
                  {isToggleArray[index] && <Text variant="faqBody">{item.content}</Text>}
                </Box>
              </Stack>

              <HStack
                minH="9"
                minW="9"
                bg={isToggleArray[index] ? 'blue.500' : 'white.500'}
                justifyContent="center"
                borderRadius="6"
                onClick={() => handleToggle(index)}
              >
                <Image src={isToggleArray[index] ? images.minus : images.plus} />
              </HStack>
            </HStack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Faq;

const faqInfo = [
  {
    title: 'What is Lyte?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    title: 'How can i get started?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    title: 'Can I withdraw?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    title: 'What currency can i trade?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    title: 'How long does it take to swap?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    title: 'What is PHX?',
    content:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
];
