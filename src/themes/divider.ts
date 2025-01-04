import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  borderColor: '#1C1C1C1A',
  borderWidth: '1px',
});

export const dividerTheme = defineStyleConfig({
  baseStyle,
});
