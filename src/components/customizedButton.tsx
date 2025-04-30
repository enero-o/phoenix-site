import type { FC } from 'react';

import { Button, HStack, Image, Text } from '@chakra-ui/react';

import useTokenIcon from '@lyte/hooks/useTokenIcon';
import ArrowDownIcon from '@lyte/icons/arrowDown';

interface ComponentProps {
  onClick: () => void;
  symbol: string;
  fontSize: string;
  isTransfer?: boolean;
  transferId?: string | undefined;
  w?: string;
}

const CustomizedButton: FC<ComponentProps> = ({ fontSize, isTransfer, onClick, symbol, transferId = '', w }) => {
  const tokenIcon = useTokenIcon();

  return (
    <Button
      variant="custom"
      fontWeight="semibold"
      rightIcon={<ArrowDownIcon />}
      onClick={onClick}
      display="flex"
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: '1.5', md: '2' }}
      fontSize={{ base: 'sm' }}
      color="bluish.700"
      py="6"
      mt="2"
      minW={w}
    >
      <HStack spacing="2" mr="6">
        <Image src={tokenIcon(isTransfer ? transferId : symbol)} alt={symbol} w="6" h="6" />
        <Text fontSize={fontSize} color="bluish.700">
          {symbol}
        </Text>
      </HStack>
    </Button>
  );
};

export default CustomizedButton;
