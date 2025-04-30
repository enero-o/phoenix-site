import type { FC } from 'react';

import {
  Box,
  Button,
  HStack,
  Image,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PinInput } from '@lyte/components';
import images from '@lyte/images';

import type { FormikValues } from 'formik';

interface ComponentProps {
  headerText: string;
  bodyText: string;
  isOtp?: boolean;
  digits: string;
  label?: string;
  isLoading: boolean;
  onCancel: () => void;
  handleNavigation: () => void;
  setVerificationCode: (values: string) => void;
  handleResetPassword: (values: FormikValues) => void;
}

const PinModalContent: FC<ComponentProps> = (props) => {
  const {
    headerText,
    bodyText,
    isOtp,
    digits,
    label,
    isLoading,
    setVerificationCode,
    onCancel,
    handleNavigation,
    handleResetPassword,
  } = props;

  return (
    <ModalContent w="sm" pt="2" borderRadius="10">
      <ModalHeader>
        <HStack justify="space-between" alignItems="flex-start">
          <Image src={images.checkIcon} />

          <Image src={images.cancelIcon} onClick={onCancel} />
        </HStack>
      </ModalHeader>

      <ModalBody>
        <Stack spacing="4">
          <Box>
            <Text variant="dark" fontWeight="medium">
              {headerText}
            </Text>
            <Text variant="modal">{bodyText}</Text>
          </Box>

          <Stack spacing="8">
            <Box>
              <Text color="brand.700">{label && label + ' '}PIN</Text>

              <PinInput setVerificationCode={setVerificationCode} />

              {isOtp && (
                <Text variant="darkGray" textAlign="start" mt="2">
                  Didn't get a code?{' '}
                  <Link to="#" onClick={handleResetPassword}>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <Text as="span" variant="darkGray" textDecor="underline">
                        Click to resend
                      </Text>
                    )}
                  </Link>
                </Text>
              )}
            </Box>

            <HStack w="100%">
              <Button variant="outline" py="6" fontWeight="medium" w={{ base: '50%', md: '35%' }} onClick={onCancel}>
                Cancel
              </Button>

              <Button w={{ base: '50%', md: '65%' }} onClick={handleNavigation} isDisabled={digits?.length < 6}>
                Confirm
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </ModalBody>
    </ModalContent>
  );
};

export default PinModalContent;
