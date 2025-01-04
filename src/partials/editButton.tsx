import type { FC } from 'react';

import { Button, Image } from '@chakra-ui/react';

import images from '@phx/images';

interface ComponentProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  p?: string;
  w?: string;
}

const EditButton: FC<ComponentProps> = ({ top, bottom = '0.8', left, right = '0', p, w='fit-content' }) => {
  return (
    <Button
      variant="white"
      leftIcon={<Image src={images.editIcon} />}
      w={w}
      h="inherit"
      p={p}
      border="1px solid #D0D7DE"
      borderRadius="8"
      position="absolute"
      bottom={bottom}
      right={right}
      top={top}
      left={left}
      fontSize="sm"
      color="brand.600"
      iconSpacing="0"
    >
      Edit
    </Button>
  );
};

export default EditButton;
