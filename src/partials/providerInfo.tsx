import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import { currencyFormatter } from '@phx/utils';

const ProviderInfo = ({ currency, fee }) => {
  return (
    <Stack mt="5">
      {/* <HStack justifyContent="space-between">
        <Text variant="lightBlack">Provider</Text>
        <Text variant="lightBlack" fontWeight="bold">
          PHX
        </Text>
      </HStack> */}

      <HStack justifyContent="space-between">
        <Text variant="lightBlack">Fee</Text>
        <Box>
          <Text variant="lightBlack" fontWeight="medium">
            {fee} {currency}
          </Text>

          <Text variant="lightBlack" fontWeight="bold" textAlign="end">
            {currencyFormatter.format(fee)}
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

export default ProviderInfo;
