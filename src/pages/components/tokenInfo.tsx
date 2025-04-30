import type { FC } from 'react';

import { Badge, Box, Card, Divider, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

import useTokenIcon from '@phx/hooks/useTokenIcon';
import images from '@phx/images';
import CryptoSparkline from '@phx/partials/cryptoSparkline';
import { currencyFormatter } from '@phx/utils';

interface ComponentProp {
  // eslint-disable-next-line no-undef
  tokenData: Token[];
}

const TokenInfo: FC<ComponentProp> = ({ tokenData }) => {
  const tokenIcon = useTokenIcon();

  return (
    <Box width="100%" right="2px">
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        bg="white.100"
        borderRadius="20"
        p="1.5"
        justifyContent="space-between"
        mx={{ md: '16' }}
        gap="6"
      >
        {tokenData?.map((item) => (
          <Card variant="token" p="0" px="6" py="6">
            <Stack justifyContent="space-between" spacing="4">
              <HStack justifyContent="space-between">
                <HStack spacing="3">
                  <Image src={tokenIcon(item?.name)} w="12" h="12" />
                  <Text variant="token">{item.name}</Text>
                  <Badge bg="gray.600" color="black">
                    {item?.name?.toUpperCase()}
                  </Badge>
                </HStack>

                <HStack borderRadius="full" bg="gray.600" w="10" h="10" justifyContent="center">
                  <Image src={images.bentArrow} />
                </HStack>
              </HStack>

              <Divider />

              <HStack justifyContent="space-between" alignItems="center">
                <Stack>
                  <Text variant="token" fontSize="2xl">
                    {currencyFormatter.format(item?.currentPrice)}
                  </Text>
                  <Text>{(item?.percentChange * 100).toFixed(2)}%</Text>
                </Stack>

                <Box w="50%">
                  <CryptoSparkline tokenData={item?.data} />
                </Box>
              </HStack>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default TokenInfo;
