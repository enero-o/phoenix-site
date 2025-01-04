import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: 'none',
    borderRadius: '16',
    boxShadow: '0px 12px 45px 0px #0000001F',
    p: { base: '4', md: '6' },
    pb: 'lg',
  },
});

const variants = {
  solid: definePartsStyle({
    container: {
      border: 'none',
      borderRadius: '24',
      boxShadow: '0px 12px 45px 0px #0000001F',
      p: { base: '4', md: '6' },
      pb: 'lg',
      w: { base: '100%', md: 'lg' },
      mb: 10,
    },
  }),
  summary: definePartsStyle({
    container: {
      backgroundColor: '#F2F2F2',
      boxShadow: 'none',
      borderRadius: '10',
      m: 0,
      mx: 10,
      p: 3,
    },
  }),
  success: definePartsStyle({
    container: {
      backgroundColor: '#21965324',
      boxShadow: 'none',
      borderRadius: '10',
      m: 0,
      mx: { md: 10 },
      p: 3,
    },
  }),
  token: definePartsStyle({
    container: {
      w: { base: '30', md: '100%' },
      boxShadow: 'none',
      bg: 'white.400',
      borderRadius: '20',
      // pb: { base: '6', md: '0' },
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, variants });
