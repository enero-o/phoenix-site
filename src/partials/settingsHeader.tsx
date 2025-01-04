import type { FC } from 'react';

import { Divider, Stack, Text } from '@chakra-ui/react';

interface ComponentProp {
  heading: string;
}

const SettingsHeader: FC<ComponentProp> = ({ heading }) => {
  return (
    <Stack>
      <Text variant="settingsHeader">{heading}</Text>
      <Divider />
    </Stack>
  );
};

export default SettingsHeader;
