import type { FC } from 'react';

import { Stack, Text } from '@chakra-ui/react';

interface ComponentProp {
  heading: string;
  text?: string;
}

const AuthFormHeader: FC<ComponentProp> = ({ heading, text }) => {
  return (
    <Stack spacing={{ base: '3', md: '6' }}>
      <Text color="brand.400" fontSize="3xl" textAlign="center" fontWeight='bold'>
        {heading}
      </Text>

      <Text variant="grey">
        {text ? text : 'Get a Phoenix (PHX) wallet to accept all tokens and withdraw your preferred cash'}
      </Text>
    </Stack>
  );
};

export default AuthFormHeader;
