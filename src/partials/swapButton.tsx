import { type FC, type ReactNode } from 'react';

import { Button, Flex, HStack, Text } from '@chakra-ui/react';

import CashIcon from '@lyte/icons/cashIcon';

interface ComponentProps {
  buttonText: string;
  text?: ReactNode | string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  isLoading?: boolean;
}

const SwapButton: FC<ComponentProps> = ({
  buttonText,
  onClick,
  text = 'Money should arrive in 5mins',
  type,
  isLoading,
}) => {
  return (
    <Flex direction="column" alignItems="center" rowGap="3" mt="3">
      <Text>{text}</Text>
      <Button type={type} w="100%" onClick={onClick} isLoading={isLoading}>
        <HStack alignItems="center">
          <CashIcon />
          <Text variant="white">{buttonText}</Text>
        </HStack>
      </Button>
    </Flex>
  );
};

export default SwapButton;
