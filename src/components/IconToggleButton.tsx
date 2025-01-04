import React, { useState } from 'react';

import { Button, type ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  hoverIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  defaultIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
}

const IconToggleButton: React.FC<CustomButtonProps> = ({ hoverIcon, defaultIcon, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      borderRadius="full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      leftIcon={isHovered ? hoverIcon : defaultIcon}
      {...props}
    >
      {children}
    </Button>
  );
};

export default IconToggleButton;
