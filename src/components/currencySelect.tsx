import type React from 'react';
import type { FC } from 'react';

import {
  Button,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import useTokenIcon from '@lyte/hooks/useTokenIcon';
import images from '@lyte/images';
import CurrencyModalContent from '@lyte/partials/currencyModal';
import type { GetCurrency } from '@lyte/types/type';

interface ComponentProps {
  filteredCrypto: GetCurrency[];
  currentCurrency: GetCurrency | undefined;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<GetCurrency | undefined>>;
}

const CurrencySelect: FC<ComponentProps> = ({ filteredCrypto, currentCurrency, setCurrentCurrency }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tokenIcon = useTokenIcon();

  return (
    <Popover placement="bottom-start" isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          variant="bluish"
          fontWeight="semibold"
          rightIcon={<Image src={images.downArrow} />}
          onClick={() => {}}
          px="0"
          fontSize={{ base: 'sm' }}
          color="brand.200"
          py="0"
          gap={{ md: '3' }}
          alignItems="center"
        >
          <HStack spacing={{ base: '1', md: '3' }}>
            <Image
              src={tokenIcon(currentCurrency?.name ?? '')}
              alt="btc"
              w={{ base: 6, md: 10 }}
              h={{ base: 6, md: 10 }}
            />

            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" color="brand.100">
              {currentCurrency?.name}
            </Text>
          </HStack>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        zIndex="2"
        left="-1"
        top="50%"
        w={{ base: 'xs', md: 'md' }}
        border="0.8px solid #D0D5DD"
        borderRadius="10"
      >
        <PopoverBody h="347px" overflowY="scroll">
          <CurrencyModalContent
            arrayList={filteredCrypto}
            handleClick={(curr) => {
              setCurrentCurrency(curr);
              onClose();
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CurrencySelect;
