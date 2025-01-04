import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Field } from 'formik';

import images from '@phx/images';
import CurrencyModalContent from '@phx/partials/currencyModal';
import type { GetCurrency } from '@phx/types/type';
import { currencyFormatter } from '@phx/utils';

import useTokenIcon from '../hooks/useTokenIcon';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  max?: string | number;
  min?: string | number;
  onClick?: () => void;
  symbol: string;
  rate?: string;
  balance?: number;
  arrayList: GetCurrency[];
  handleClick: (token: GetCurrency) => void;
}

export default function CustomNumberInput(props: Props) {
  const { name, label, placeholder, max, min, symbol, rate, balance, arrayList, handleClick } = props;

  const tokenIcon = useTokenIcon();
  const modalControls = useDisclosure();

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
                    <Text variant="label">{balance}</Text>

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
                  onClick={modalControls.onOpen}
                  px="0"
                  fontSize={{ base: 'sm' }}
                  color="brand.200"
                  py="0"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack spacing="1" alignItems="center">
                    <Avatar src={tokenIcon(symbol)} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} />

                    <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="semibold" color="brand.100">
                      {symbol || '--'}
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
                    max={max}
                    min={min}
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

            <Stack>
              <Divider />

              <HStack>
                <Text variant="label">
                  {field.value} {symbol} ~~ {currencyFormatter.format(Number(rate) * field.value || 0)}
                </Text>
                <Image src={images.tDesignSwap} />
              </HStack>
            </Stack>
          </Stack>

          {form.touched[name] && <FormErrorMessage>{form.errors[name]}</FormErrorMessage>}
        </FormControl>
      )}
    </Field>
  );
}
