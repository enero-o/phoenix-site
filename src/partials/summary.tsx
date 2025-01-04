import type { FC } from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

interface ComponentProps {
  title: string;
  crypto: string;
  amount?: string;
  color?: string;
}

const Summary: FC<ComponentProps> = ({ title, crypto, amount, color }) => {
  return (
    <HStack justifyContent="space-between" alignItems="flex-start">
      <Text variant="lightBlack" fontWeight="medium">
        {title}
      </Text>
      <Box textAlign="end" lineHeight="1.4">
        <Text variant="lightBlack" fontWeight="medium" color={color}>
          {crypto}
        </Text>

        {amount && (
          <Text variant="blue" color={color}>
            {amount}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default Summary;
