import { useState } from 'react';

import {
  Avatar,
  Box,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckCircleIcon } from 'lucide-react';

import SearchInput from '@phx/components/searchFilter';
import useTokenIcon from '@phx/hooks/useTokenIcon';
import type { Wallet } from '@phx/types/graphql';
import type { GetCurrency } from '@phx/types/type';
import { currencyFormatter, searchFilter } from '@phx/utils';

interface ComponentProps {
  data: Wallet[];
  handleClick: (token: string) => void;
  modalControls: any;
}

const CurrencyModal = ({ data, handleClick, modalControls }: ComponentProps) => {
  const [selected, setSelected] = useState<string>();
  const [search, setSearch] = useState('');
  const tokenIcon = useTokenIcon();

  const tokenListData = searchFilter(search, data, (t) => t.currency);

  const handleButtonClick = (item: GetCurrency) => {
    handleClick(item);
    setSelected(item.currency);
    modalControls.onClose();
  };

  return (
    <Modal isOpen={modalControls.isOpen} onClose={modalControls.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Token</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Box borderRadius="3xl" py="2" justifyItems="center">
            <SearchInput placeholder="Type a cryptocurrency" onChange={(s) => setSearch(s)} />

            <Stack spacing="2" my="4" minH="40" w="100%">
              <Text variant="selection">Most Popular</Text>

              <Divider />

              {tokenListData.map((item) => (
                <HStack
                  key={item.accountId}
                  onClick={() => handleButtonClick(item)}
                  cursor={'pointer'}
                  justifyContent="space-between"
                  my="1"
                  py="2"
                >
                  <HStack>
                    <Avatar src={tokenIcon(item?.currency)} h="10" w="10" borderRadius="50%" />

                    <Text fontSize="md" fontWeight="medium">
                      {item.currency}
                    </Text>

                    {selected == item?.currency && <CheckCircleIcon color="green" size="12" />}
                  </HStack>

                  <VStack gap="0" align="flex-start" w="10">
                    <Text fontSize="md" fontWeight="medium">
                      {item?.balance?.availableBalance}
                    </Text>

                    <Text fontSize="xs" color="gray.800">
                      {currencyFormatter.format(item?.balance?.fiatBalance)}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CurrencyModal;
