import type { FC } from 'react';

import { Box, Button, HStack, Image, ModalBody, ModalContent, ModalHeader, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import { Input } from '@phx/components';
import images from '@phx/images';

interface ComponentProps {
  onCancel: () => void;
  handleNavigation: () => void;
}

const TransactionPin: FC<ComponentProps> = ({ onCancel, handleNavigation }) => {
  return (
    <ModalContent w="sm" pt="2" borderRadius="10">
      <ModalHeader>
        <HStack justify="space-between" alignItems="flex-start">
          <HStack
            w="16"
            h="16"
            bgColor="#BFCEFD"
            borderRadius="full"
            justifyContent="center"
            border="8px solid #EAEFFE"
          >
            <Image src={images.blueWallet} />
          </HStack>

          <Image src={images.cancelIcon} onClick={onCancel} />
        </HStack>
      </ModalHeader>

      <ModalBody>
        <Stack spacing="7">
          <Box>
            <Text variant="dark" fontWeight="bold">
              Enter your transaction PIN
            </Text>
            <Text variant="modal">kindly enter your transfer pin to proceed with this transaction.</Text>
          </Box>

          <Formik initialValues={{}} onSubmit={() => {}}>
            {() => {
              return (
                <Form>
                  <Stack spacing="8">
                    <Input name="pin" type="password" w={{ base: '100%', md: '75%' }} h={{ base: '12' }} />

                    <HStack w="100%">
                      <Button
                        variant="outline"
                        py="6"
                        fontWeight="medium"
                        w={{ base: '50%', md: '35%' }}
                        onClick={onCancel}
                      >
                        Cancel
                      </Button>

                      <Button w={{ base: '50%', md: '65%' }} onClick={handleNavigation}>
                        Confirm Transaction
                      </Button>
                    </HStack>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </ModalBody>
    </ModalContent>
  );
};

export default TransactionPin;
