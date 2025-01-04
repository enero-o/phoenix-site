import { HStack, Image, Text } from '@chakra-ui/react';

import images from '@phx/images';

const InputRightElement = () => {
  return (
    <HStack>
      <Image src={images.pasteIcon} alt="paste" />
      <Text variant="selection" fontWeight='medium'>Paste</Text>
    </HStack>
  );
};

export default InputRightElement;
