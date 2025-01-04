import type { FC } from 'react';

import { Divider, HStack, Text } from '@chakra-ui/react';

interface ComponentProp {
  text: string;
}

const Status: FC<ComponentProp> = ({ text }) => {
  return (
    <HStack>
      <Divider />

      <Text variant="green">{text}</Text>
      
      <Divider />
    </HStack>
  );
};

export default Status;
