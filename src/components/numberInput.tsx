import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field } from 'formik';

import TokenNetwork from '@lyte/components/tokenNetwork';
import images from '@lyte/images';
import CurrencyModalContent from '@lyte/partials/currencyModal';
import type { GetCurrency } from '@lyte/types/type';
import { getLimits, truncateValue } from '@lyte/utils';

import { getTokenName } from '../hooks/useTokenIcon';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  max?: string | number;
  min?: string | number;
  onClick?: () => void;
  symbol: string;
  rate?: any;
  balance?: number;
  arrayList: GetCurrency[];
  handleClick: (token: GetCurrency) => void;
  modalControls: any;
  network?: string;
}

export default function CustomNumberInput(props: Props) {
  const { name, label, placeholder, network, symbol, rate, balance, arrayList, modalControls, handleClick } = props;

  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.touched[name] && form.errors[name]}
          mb="1.5"
          borderRadius="16px"
          py={{ base: '3', md: '5' }}
          px="3"
          bg="gray.100"
        >
          <Stack spacing="4">
            <FormLabel me="0" my="0">
              <HStack justifyContent="space-between">
                <Text variant="label">{label}</Text>

                {balance && (
                  <HStack spacing="1.5" justifyContent="flex-end">
                    <Image src={images.tokenSwap} />
                    <Text variant="label">{truncateValue(balance, symbol)}</Text>

                    {balance > 0 && (
                      <Button
                        border="1px solid #12B347"
                        borderRadius="md"
                        color="green.500"
                        px="0"
                        py="0"
                        h="6"
                        fontSize="xs"
                        bg="#12B34714"
                        _hover={{ bg: 'inherit' }}
                        onClick={() => {
                          // TODO handling for swap and send
                          form.setFieldValue('baseCurrency', balance);
                          form.setFieldValue('amount', balance);
                        }}
                      >
                        Max
                      </Button>
                    )}
                  </HStack>
                )}
              </HStack>
            </FormLabel>

            <HStack justifyContent="space-between" alignItems="center">
              <VStack alignItems="flex-end">
                <Button
                  variant="bluish"
                  fontWeight="semibold"
                  onClick={modalControls?.onOpen}
                  px="0"
                  fontSize={{ base: 'sm' }}
                  color="brand.200"
                  py="0"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack spacing="3" alignItems="center">
                    <TokenNetwork currency={symbol} network={network} />

                    <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="semibold" color="brand.100">
                      {getTokenName(symbol) || '--'}
                    </Text>

                    <Image src={images.rightIcon} />
                  </HStack>
                </Button>

                <CurrencyModalContent data={arrayList} handleClick={handleClick} modalControls={modalControls} />
              </VStack>

              <VStack alignItems="flex-start">
                <NumberInput
                  size="xs"
                  step={0.01}
                  // precision={10}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={async (val) => {
                    await form.setFieldValue(field.name, val, true);
                    form.setTouched({ ...form.touched, [field.name]: true });
                  }}
                  clampValueOnBlur={false}
                  border="none"
                  boxShadow="none"
                  style={{ border: 'none', outline: 'none', borderColor: 'transparent' }}
                >
                  <NumberInputField
                    {...field}
                    // pattern=".*"
                    max={getLimits(symbol).max}
                    min={getLimits(symbol).min}
                    placeholder={placeholder}
                    onKeyDown={(e) => {
                      e.key === 'Enter' && e.preventDefault();
                    }}
                    textAlign="right"
                    paddingInline="0"
                    _focusVisible={{ border: 'none', borderColor: 'transparent', outline: 'none' }}
                    _hover={{ border: 'none', outline: 'none', borderColor: 'transparent' }}
                    fontSize={{ base: '2xl' }}
                    fontWeight="semibold"
                    aria-invalid={false}
                    _placeholder={{ fontSize: '28px', fontWeight: 'semibold', color: 'black', textAlign: 'right' }}
                    border="none"
                    color="black"
                    style={{ border: 'none', outline: 'none', borderColor: 'transparent' }}
                    _invalid={{
                      boxShadow: 'none',
                    }}
                  />
                </NumberInput>
              </VStack>
            </HStack>

            <Stack>{rate}</Stack>
          </Stack>
        </FormControl>
      )}
    </Field>
  );
}
