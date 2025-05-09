import type { FC } from 'react';

import { Box, Card, Divider, HStack, Image, Stack, Text } from '@chakra-ui/react';

import useTokenIcon from '@lyte/hooks/useTokenIcon';
import { currencyFormatter } from '@lyte/utils';

interface ComponentProp {
  data: any[];
}

const WalletCard: FC<ComponentProp> = ({ data }) => {
  const tokenIcon = useTokenIcon();

  return (
    <Box>
      {data?.map((i) => (
        <Card key={i.accountId} cursor="pointer" mt="2">
          <Stack>
            <HStack justifyContent="space-between">
              <HStack>
                <Image src={tokenIcon(i.currency)} alt={i.currency} h={12} w={12} />

                <Box>
                  <Text>{i?.currency}</Text>
                </Box>
              </HStack>
            </HStack>

            <Divider />

            <HStack justifyContent="space-between">
              <Box>
                <Text variant="faqHeader" fontSize="md">
                  Rate
                </Text>

                <Text variant="faqBody">{currencyFormatter.format(parseFloat(i?.rate) ?? 0)}</Text>
              </Box>

              <Box>
                <Text variant="faqHeader" fontSize="md">
                  USD
                </Text>

                <Text variant="faqBody">{currencyFormatter.format(parseFloat(i?.balance?.fiatBalance) ?? 0)}</Text>
              </Box>

              <Box>
                <Text variant="faqHeader" fontSize="md">
                  Balance
                </Text>

                <Text variant="faqBody">{i?.balance?.availableBalance ?? 0}</Text>
              </Box>
            </HStack>
          </Stack>
        </Card>
      ))}
    </Box>
  );
};

export default WalletCard;
