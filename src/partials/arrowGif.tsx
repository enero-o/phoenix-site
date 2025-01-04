import { Box, HStack, Image } from '@chakra-ui/react';

import images from '@phx/images';

const ArrowGif = () => {
  return (
    <Box className="arrow-container">
      <HStack className="arrow" gap="0" alignItems="center">
        {Array.from({ length: 9 }, (_, index) => (
          <Image key={index} src={images.arrowIcon} />
        ))}
      </HStack>
    </Box>
  );
};

export default ArrowGif;
