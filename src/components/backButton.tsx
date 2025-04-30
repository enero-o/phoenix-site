import type { FC } from 'react';

import { Button, Image } from '@chakra-ui/react';

import images from '@lyte/images';

interface Prop {
  onClick: () => void;
}

const BackButton: FC<Prop> = ({ onClick }) => {
  return (
    <Button variant="transparent" leftIcon={<Image src={images.arrowLeft} />} onClick={onClick}>
      Back
    </Button>
  );
};

export default BackButton;
