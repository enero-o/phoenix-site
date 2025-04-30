import { useCallback, useEffect } from 'react';

import { CircularProgress, HStack, Image, Text } from '@chakra-ui/react';

import { useCountdown } from '@lyte/hooks/useCountdown';
import { getTokenName } from '@lyte/hooks/useTokenIcon';
import images from '@lyte/images';
import { truncateValue } from '@lyte/utils';

const CircularTimer = ({ quote, refetch, baseCurrency, quoteCurrency }) => {
  const refetchMemoized = useCallback(() => {
    if (baseCurrency?.currency && quoteCurrency?.currency) {
      refetch();
    }
  }, [refetch, baseCurrency?.currency, quoteCurrency?.currency]);

  const { timer, resetTimer } = useCountdown(30, refetchMemoized);

  useEffect(() => {
    if (quote !== undefined) {
      resetTimer();
    }
  }, [quote]);

  return (
    <HStack>
      <Text variant="label">1 {getTokenName(baseCurrency?.currency ?? '')}</Text>
      <Image src={images.tDesignSwap} />

      <Text variant="label">{truncateValue(quote?.rate, quoteCurrency?.currency)}</Text>

      <CircularProgress size="4" value={(timer / 30) * 100}></CircularProgress>
    </HStack>
  );
};

export default CircularTimer;
