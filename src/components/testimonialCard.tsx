import { Avatar, Flex, Text, VStack } from '@chakra-ui/react';

interface Props {
  name: string;
  message: string;
  occupation: string;
  colorScheme: string;
}

const TestimonialCard = ({ colorScheme, name, message, occupation }: Props) => {
  return (
    <Flex
      height="220px"
      bgColor="white.100"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="16px"
      boxShadow="12px 12px 0 0 black"
      justifyContent="space-between"
      flexDir="column"
      gap="6"
      py="8"
      px="4"
    >
      <Text color="black" fontSize={{ base: 'xl', md: '1.375rem' }}>
        "{message}"
      </Text>

      <Flex alignItems="center" gap="4">
        <Avatar bg={colorScheme} name={name[0]} size="lg" border="2px solid black" />

        <VStack alignItems="start" gap="0">
          <Text color="brand.100" fontSize="xl" fontWeight="bold">
            {name}
          </Text>

          <Text color="brand.200" fontSize="xl">
            {occupation}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default TestimonialCard;
