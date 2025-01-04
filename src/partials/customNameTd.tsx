import type { FC } from 'react';

import { Avatar, Divider, HStack, Td, Text } from '@chakra-ui/react';

interface ComponentProps {
  icon: string;
  full?: string;
  short: string;
}

const CustomNameTd: FC<ComponentProps> = ({ icon, full, short }) => {
  return (
    <Td>
      <HStack spacing={{ base: '1', md: '5' }} alignItems="center">
        <Avatar src={icon} w={{ base: 6, md: 10 }} h="auto" />

        {!full && <Text variant="status">{full}</Text>}

        <HStack>
          <Divider borderColor="black" orientation="vertical" />
          <Text>{short}</Text>
        </HStack>
      </HStack>
    </Td>
  );
};

export default CustomNameTd;
