import type { FC } from 'react';

import { HStack, PinInput, PinInputField, Text } from '@chakra-ui/react';

interface ComponentProp {
  setVerificationCode: (values: string) => void;
}

const CustomPinInput: FC<ComponentProp> = ({ setVerificationCode }) => {
  return (
    <HStack justifyContent="center">
      <PinInput otp onComplete={(value) => setVerificationCode(value)} size="lg" placeholder="0">
        {Array.from({ length: 3 }, (_, index) => (
          <PinInputField key={index} _placeholder={{ color: '#D0D5DD', fontSize: '4xl' }} fontSize='4xl'  />
        ))}

        <Text color="#D0D5DD" fontWeight="bold" fontSize="50px" lineHeight="0">
          -
        </Text>

        {Array.from({ length: 3 }, (_, index) => (
          <PinInputField key={index} _placeholder={{ color: '#D0D5DD', fontSize: '4xl' }} fontSize='4xl' />
        ))}
      </PinInput>
    </HStack>
  );
};

export default CustomPinInput;
