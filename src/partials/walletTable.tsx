import { type FC } from 'react';

import { Stack, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import useTokenIcon from '@phx/hooks/useTokenIcon';
import { currencyFormatter } from '@phx/utils';

import CustomNameTd from './customNameTd';
import TdCustom from './tdCustom';

interface ComponentProp {
  data: any[];
}

const WalletTable: FC<ComponentProp> = ({ data }) => {
  const tokenIcon = useTokenIcon();

  return (
    <Stack spacing="6">
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
            {data?.map((item) => {
              const rate = currencyFormatter.format(parseFloat(item?.rate));

              return (
                <Tr key={item?.accountId} cursor="pointer">
                  <CustomNameTd icon={tokenIcon(item?.currency)} short={item?.currency} />

                  <TdCustom>{rate}</TdCustom>

                  <TdCustom>{item?.balance?.availableBalance}</TdCustom>

                  <TdCustom>{currencyFormatter.format(item?.balance?.fiatBalance)}</TdCustom>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default WalletTable;

const tableHeadData = ['COIN', 'RATE', 'BALANCE', 'USD'];
