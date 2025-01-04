import { type ReactNode, useState } from 'react';

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  type InputProps,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Field, type FieldProps } from 'formik';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

interface Props extends InputProps {
  name: string;
  label?: string;
  type?: string;
  // placeholder?: string;
  disabled?: boolean;
  pb?: string;
  pl?: object;
  w?: object;
  h?: object;
  bg?: string;
  fontSize?: any;
  rightElement?: ReactNode;
  fontWeight?: string;
  isReadonly?: boolean;
  helperText?: string;
  // onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

const CustomInput = (props: Props) => {
  const {
    name,
    label,
    type,
    placeholder,
    disabled,
    pl,
    pb,
    w,
    h = { base: '58px' },
    bg = 'white',
    fontSize,
    fontWeight,
    rightElement,
    isReadonly,
    onBlur,
    helperText,
    ...rest
  } = props;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prevState) => !prevState);

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl isInvalid={!!(form.touched[name] && form.errors[name])}>
          <FormLabel fontSize="sm" color="black" fontWeight="semibold">
            {label}
          </FormLabel>

          <InputGroup>
            {rightElement && (
              <InputRightElement width="7.5rem" pt="5" ps="2">
                {rightElement}
              </InputRightElement>
            )}

            {type === 'password' && (
              <InputRightElement>
                <Box mt="5" mr="3" onClick={handleShow}>
                  {show ? <EyeOffIcon /> : <EyeIcon />}
                </Box>
              </InputRightElement>
            )}

            <Input
              {...field}
              {...rest}
              placeholder={placeholder}
              type={handleType(type, show)}
              disabled={disabled}
              pl={pl}
              pb={pb}
              border="0.91px solid #E4E4E7"
              bgColor={bg}
              fontSize={fontSize}
              fontWeight={fontWeight}
              w={w}
              h={h}
              color="black"
              borderRadius="10"
              _placeholder={{ color: 'gray.700', fontSize: 'sm' }}
              _disabled={{
                color: 'black',
                opacity: 1,
              }}
              _focus={{ border: '0.91px solid #1C1C1C', boxShadow: 'none' }}
              _active={{ border: '0.91px solid #1C1C1C' }}
              onBlur={onBlur}
              isReadOnly={isReadonly}
            />
          </InputGroup>

          {helperText && (
            <Text variant="helper" w="75%" mt="1">
              {helperText}
            </Text>
          )}

          {form.touched[name] && form.errors[name] && <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>}
        </FormControl>
      )}
    </Field>
  );
};

export default CustomInput;

const handleType = (type = 'text', show: boolean) => {
  if (type == 'password') {
    if (show) {
      return 'text';
    } else {
      return 'password';
    }
  } else {
    return type;
  }
};
