import type { FC } from 'react';

import { Avatar } from '@chakra-ui/react';

import useTokenIcon from '@phx/hooks/useTokenIcon';

interface ComponentProps {
  currency: string;
  network?: string;
  size?: string;
}

const TokenNetwork: FC<ComponentProps> = ({ currency, network, size = '10' }) => {
  const tokenIcon = useTokenIcon();

  return (
    <>
      <Avatar src={tokenIcon(currency)} h={size} w="10" />

      {network && (
        <Avatar
          src={tokenIcon(network)}
          pos="absolute"
          bottom="0"
          right="-2"
          zIndex="1"
          boxShadow="0 0 0 2px white"
          w={{ base: 3, md: 4 }}
          h="auto"
        />
      )}
    </>
  );
};

export default TokenNetwork;
