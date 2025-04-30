import type { FC } from 'react';

import { Button, Image } from '@chakra-ui/react';

import images from '@lyte/images';

interface ComponentProp {
  handleGoogleSignIn: () => void;
  text?: string;
}

const GoogleSignInBtn: FC<ComponentProp> = ({ text, handleGoogleSignIn }) => {
  return (
    <Button
      type="button"
      variant="transparent"
      leftIcon={<Image src={images.google} alt="google" />}
      onClick={handleGoogleSignIn}
    >
      {text ? text : 'Sign in with Google'}
    </Button>
  );
};

export default GoogleSignInBtn;
