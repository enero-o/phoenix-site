import type { FC } from 'react';

import { Flex, FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { Field, type FieldProps } from 'formik';
interface ComponentProps {
  name: string;
  label?: string;
  placeholder?: string;
  selectWidth?: string;
  children?: any;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  defaultValue?: string;
  isAsterisk?: boolean;
  hideLabel?: boolean;
}

const CustomSelect: FC<ComponentProps> = ({
  name,
  label,
  placeholder,
  selectWidth,
  children,
  onChange,
  disabled,
  defaultValue,
  hideLabel,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl isInvalid={!!(form.touched[name] && form.errors[name])} marginInline="auto" isDisabled={disabled}>
          <Flex direction="column" justifyContent="space-between">
            <FormLabel display={hideLabel ? 'none' : 'block'} fontSize="lg">
              {label}
            </FormLabel>

            <Select
              {...field}
              colorScheme="green.300"
              // icon={<ArrowDownIcon />}
              iconSize="12"
              placeholder={placeholder}
              color="gray.700"
              size="md"
              fontSize="sm"
              w={selectWidth}
              h={{ base: '10', md: '58px' }}
              bg="white.100"
              borderRadius="10"
              fontWeight="normal"
              onChange={(e) => {
                form.setFieldValue(field.name, e.target.value);
                onChange && onChange(e.target.value);
              }}
              value={field.value}
              zIndex="1000"
              border="0.91px solid #1C1C1C33"
              defaultValue={defaultValue}
              _placeholder={{ color: '#CBD5E1' }}
              _focusVisible={{ borderColor: 'none', zIndex: 'auto', boxShadow: 'none' }}
            >
              {children}
            </Select>
          </Flex>

          {form.errors[name] && form.touched[name] && <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>}
        </FormControl>
      )}
    </Field>
  );
};

export default CustomSelect;
