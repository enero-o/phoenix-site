import type { FC } from 'react';

import { Box, Card, Divider, HStack, Image, Stack, Text } from '@chakra-ui/react';

import useTokenIcon from '@lyte/hooks/useTokenIcon';
import { formatLargeNumber } from '@lyte/utils';

interface ComponentProps {
  name: string;
  symbol: string;
  percent_24h: number;
  // eslint-disable-next-line no-undef
  token: GetCurrencyRate[];
}

const TokenCard: FC<ComponentProps> = (props) => {
  const { name, percent_24h, symbol, token } = props;

  const tokenIcon = useTokenIcon();

  const transformedTokenData = token?.flatMap((token) => [
    { name: 'Price', value: token?.quote?.USD?.price },
    { name: 'Market Cap', value: token?.quote?.USD?.market_cap },
    { name: 'Volume', value: token?.quote?.USD?.volume_24h },
  ]);

  return (
    <Card>
      <Stack>
        <HStack justifyContent="space-between">
          <HStack>
            <Image src={tokenIcon(symbol)} alt={symbol} h={12} w={12} />
            
            <Box>
              <Text fontWeight='600'>{name}</Text>
              <Text>{symbol}</Text>
            </Box>
          </HStack>

          <Box textAlign="end">
            <Text fontSize='sm'>24h %</Text>

            <Text color={percent_24h <= 0 ? 'red' : 'green'}>
              {(percent_24h * 100)?.toFixed(2)} %
            </Text>
          </Box>
        </HStack>

        <Divider />

        <HStack justifyContent="space-between">
          {transformedTokenData?.map((item) => (
            <Box>
              <Text variant="faqHeader" fontSize="md">
                {item?.name}
              </Text>

              <Text variant="faqBody">{formatLargeNumber(item?.value)}</Text>
            </Box>
          ))}
        </HStack>
      </Stack>
    </Card>
  );
};

export default TokenCard;
