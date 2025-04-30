import { useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Button, Divider, Flex, HStack, Image, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

import { NumberInput } from '@lyte/components';
import { useQuote } from '@lyte/hooks/currencies';
import { getTokenName } from '@lyte/hooks/useTokenIcon';
import images from '@lyte/images';
import ProviderInfo from '@lyte/partials/providerInfo';
import { currencyFormatter, truncateValue } from '@lyte/utils';
import { validationSchema } from '@lyte/utils/validator';

import CircularTimer from '../components/circularTimer';

const SwapForm = () => {
  const [amount, setAmount] = useState('');

  const { onOpen } = useDisclosure();

  const baseModalControls = useDisclosure();
  const quoteModalControls = useDisclosure();

  const [params] = useSearchParams();

  const defaultCurrency = params.get('currency')?.toString() ?? 'USDC';

  const wallets = [
    { currency: 'BTC', name: 'BTC', network: 'Bitcoin' },
    { currency: 'ETH', name: 'ETH', network: 'ETH' },
    { currency: 'USDT', name: 'USDT', network: 'TRON' },
    { currency: 'NGX', name: 'NGX', network: '' },
    { currency: 'USDC', name: 'USDC', network: 'ETH' },

  ];

  const findBaseCurrency = useMemo(
    () => wallets?.find((item) => item?.currency === defaultCurrency),
    [wallets, defaultCurrency],
  );

  const findQuoteCurrency = useMemo(() => wallets?.find((item) => item?.currency === 'NGX'), [wallets]);

  const [baseCurrency, setBaseCurrency] = useState(findBaseCurrency);
  const [quoteCurrency, setQuoteCurrency] = useState({});

  useEffect(() => {
    if (findBaseCurrency || findQuoteCurrency) {
      setBaseCurrency(findBaseCurrency);
      setQuoteCurrency(findQuoteCurrency);
    }
  }, [findBaseCurrency, findQuoteCurrency]);

  const {
    data: val,
    loading: quoteLoading,
    refetch,
  } = useQuote(baseCurrency?.currency, quoteCurrency?.currency, amount);

  const quote = val?.getQuote;

  const handleBaseCurrencyClick = useCallback((curr) => {
    setBaseCurrency(curr);
  }, []);

  const handleQuoteCurrencyClick = useCallback((curr) => {
    setQuoteCurrency(curr);
  }, []);

  const schema = validationSchema('baseCurrency', baseCurrency?.currency);

  return (
    <Formik
      initialValues={{ baseCurrency: '', quoteCurrency: '' }}
      onSubmit={() => {}}
      validationSchema={schema}
      enableReinitialize
    >
      {({ values, setFieldValue, errors, isValid }) => {
        // TODO, this could cause performance issues
        useEffect(() => {
          setAmount(values?.baseCurrency);
        }, [values.baseCurrency]);

        useEffect(() => {
          setFieldValue('quoteCurrency', truncateValue(quote?.amount, quoteCurrency?.currency, false));
        }, [quote]);

        return (
          <Form>
            <Flex flexDir={'column'} alignItems="center" rowGap="1" columnGap="2" position="relative">
              <NumberInput
                name="baseCurrency"
                label="From"
                placeholder="0.0"
                symbol={getTokenName(baseCurrency?.currency ?? '')}
                arrayList={wallets}
                handleClick={handleBaseCurrencyClick}
                modalControls={baseModalControls}
              />

              <NumberInput
                name="quoteCurrency"
                label="To"
                symbol={getTokenName(quoteCurrency?.currency ?? '')}
                placeholder="0.0"
                rate={
                  <Rate quote={quote} refetch={refetch} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} />
                }
                arrayList={wallets}
                handleClick={handleQuoteCurrencyClick}
                modalControls={quoteModalControls}
              />

              <Box
                bg="white.100"
                borderRadius="full"
                p="2"
                position="absolute"
                top={{ base: '105', md: '125' }}
                left={{ md: '220' }}
              >
                <Image src={images.tDesignSwapVert} />
              </Box>

              <Button
                rightIcon={isValid && <Image src={images.swap} />}
                disabled={!quote || !isValid || baseCurrency <= 0}
                mt="2"
                px="20"
                w="full"
                onClick={onOpen}
                isLoading={quoteLoading}
              >
                {isValid ? 'Swap' : `${Object.values(errors)[0]}`}
              </Button>
            </Flex>

            <ProviderInfo currency={getTokenName(baseCurrency?.currency)} fee={0} feeInUsd={0} />
          </Form>
        );
      }}
    </Formik>
  );
};

function Rate({ quote, refetch, baseCurrency, quoteCurrency }) {
  return (
    <VStack justify="flex-start" align="start" minH="4">
      <Divider />

      {quote && (
        <HStack justifyContent="space-between" w="full">
          <CircularTimer quote={quote} refetch={refetch} baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} />

          <Text variant="label">{currencyFormatter.format(quote?.quoteToUSD)}</Text>
        </HStack>
      )}
    </VStack>
  );
}

export default SwapForm;
