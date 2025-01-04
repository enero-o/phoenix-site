import type { FC } from 'react';

import { Box, Text } from '@chakra-ui/react';

interface ComponentProps {
  header: string;
  text: string;
}

const SettingsCheckbox: FC<ComponentProps> = ({ header, text }) => {
  return (
    <Box pb="1">
      <Text variant="settings">{header}</Text>
      <Text variant="helper">{text}</Text>
    </Box>
  );
};

export default SettingsCheckbox;
