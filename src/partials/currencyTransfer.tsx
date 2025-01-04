import type { FC } from 'react';

import { Flex, Image, Text } from '@chakra-ui/react';

import useTokenIcon from '@phx/hooks/useTokenIcon';
import images from '@phx/images';

import ArrowGif from './arrowGif';

interface ComponentProps {
  base?: string;
  quote?: string;
}

const CurrencyTransfer: FC<ComponentProps> = ({ base, quote }) => {
  const tokenIcon = useTokenIcon();

  return (
    <Flex alignItems="center" gap={2} justifyContent="center">
      <Flex align="center" gap={1}>
        <Image src={tokenIcon(base!)} alt="BTC Icon" h={{ base: '6', md: '10' }} w={{ base: '6', md: '10' }} />
        <Text variant="confirm">{base}</Text>
      </Flex>

      <ArrowGif />

      <Flex align="center" gap={1}>
        <Image src={images.confirm} alt="0x Icon" h={{ base: '6', md: '10' }} w={{ base: '6', md: '10' }} />
      </Flex>

      <ArrowGif />

      <Flex align="center" gap={1}>
        <Image src={tokenIcon(quote!)} alt="USDC Icon" h={{ base: '6', md: '10' }} w={{ base: '6', md: '10' }} />
        <Text variant="confirm">{quote}</Text>
      </Flex>
    </Flex>
  );
};

export default CurrencyTransfer;
