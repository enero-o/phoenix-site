import type { FC } from 'react';

import { Badge, Box, Button, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import useTokenIcon from '@lyte/hooks/useTokenIcon';
import { currencyFormatter } from '@lyte/utils';

import CryptoSparkline from './cryptoSparkline';
import CustomNameTd from './customNameTd';
import TdCustom from './tdCustom';

interface ComponentProp {
  // eslint-disable-next-line no-undef
  tokenData: Token[];
}

const CryptoTable: FC<ComponentProp> = ({ tokenData }) => {
  const navigate = useNavigate();

  const tokenIcon = useTokenIcon();

  const handleNavigation = (token: string) => {
    navigate(`/individual-crypto?token=${token}`);
  };

  let currentId = 1;

  return (
    <Stack spacing="6">
      <Text variant="dark">Cryptocurrency Categories</Text>

      <Badge bg="#EAEAEA" w="fit-content" py="3" px="3" borderRadius="6" textTransform="none" fontSize="md">
        Most Popular
      </Badge>

      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              {tableHeadData.map((item, index) => (
                <Th key={index} textTransform="capitalize" color="brand.100" fontSize="md" py="5">
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {tokenData?.map((item, index) => (
              <Tr key={index} cursor="pointer">
                <TdCustom>{currentId++}</TdCustom>
                <CustomNameTd icon={tokenIcon(item?.name)} full={item?.fullName} short={item?.name} />
                <TdCustom>{currencyFormatter.format(item?.currentPrice)}</TdCustom>
                <TdCustom>{(item?.percentChange * 100).toFixed(2)}%</TdCustom>
                <Td>
                  <Box width="100px" height="40px">
                    <CryptoSparkline tokenData={item?.data} />
                  </Box>
                </Td>
                <Td>
                  <Button py="1" onClick={() => handleNavigation(item.name)}>
                    Swap
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default CryptoTable;

const tableHeadData = ['NO', 'NAME', 'LAST PRICE', 'CHANGE', 'MARKET STATS', 'SWAP'];
