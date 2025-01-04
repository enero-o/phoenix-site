/* eslint-disable no-undef */
import type { FC } from 'react';

import { Stack, Text, useMediaQuery } from '@chakra-ui/react';

import CryptoTable from '@phx/partials/cryptoTable';
import TokenCard from '@phx/partials/tokenCard';

interface ComponentProp {
  tokenData: Token[];
  filteredData: GetCurrencyRate[];
}

const MarketUpdate: FC<ComponentProp> = ({ filteredData, tokenData }) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Stack my={{ base: '12', md: '16' }} mx={{ base: '4', md: '24' }} spacing="6">
      <Text variant="header">Market Update</Text>

      {isLargeScreen ? (
        <CryptoTable tokenData={tokenData} />
      ) : (
        <>
          {filteredData?.map((item) => (
            <TokenCard
              name={item?.name}
              symbol={item?.symbol}
              percent_24h={item?.quote?.USD?.percent_change_24h}
              token={[item]}
            />
          ))}
        </>
      )}
    </Stack>
  );
};

export default MarketUpdate;