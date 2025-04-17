import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  rounded: '30',
  color: 'black',
  bgColor: 'transparent',
  borderColor: 'gray.400',
  fontWeight: 'bold',
  fontSize: 'md',
  px: '8',
  py: '2',
  _disabled: {
    bgColor: 'transparent',
    borderColor: '#afafaf',
    color: '#afafaf',
  },
  _hover: {
    bgColor: 'black',
    color: 'white.100',
  },
});

const redOutline = defineStyle({
  rounded: '30',
  bgColor: 'transparent',
  border: '0.72px solid #E20000',
  fontWeight: 'bold',
  fontSize: 'md',
  color: 'red.200',
  px: '8',
  py: '2',
  _disabled: {
    bgColor: 'transparent',
    borderColor: 'none',
    // color: '#afafaf',
  },
  _hover: {
    bgColor: 'red.200',
    color: 'white.100',
  },
});

const settingsOutline = defineStyle({
  rounded: '10',
  color: 'black',
  bgColor: 'white.800',
  border: '1px solid #1B1F2426',
  fontWeight: 'medium',
  fontSize: 'md',
  px: '8',
  py: '2',
  _disabled: {
    bgColor: 'transparent',
    borderColor: '#afafaf',
    color: '#afafaf',
  },
  _hover: {
    bgColor: 'black',
    color: 'white.100',
  },
});

const darkOutline = defineStyle({
  rounded: '30',
  color: 'black',
  bgColor: 'transparent',
  border: '1px solid #000000',
  fontWeight: 'semibold',
  fontSize: 'sm',
  px: '3',
  py: '2',
  _disabled: {
    bgColor: 'transparent',
    borderColor: '#afafaf',
    color: '#afafaf',
  },
  _hover: {
    bgColor: 'black',
    color: 'white.100',
  },
});

const solid = defineStyle({
  rounded: '30',
  color: 'white.100',
  bgColor: 'purple.200',
  fontWeight: 'medium',
  fontSize: 'md',
  py: '6',
  px: '8',
  _disabled: {
    bgColor: '#B8B8B8',
  },
  _hover: {
    bgColor: 'black',
  },
});

const orange = defineStyle({
  rounded: '3xl',
  color: 'orange',
  bgColor: 'transparent',
  border: '1px solid #FF6E05',
  fontWeight: 'bold',
  fontSize: 'md',
  px: '3',
  py: '5',
});

const transparent = defineStyle({
  color: 'blue.700',
  fontWeight: 'medium',
  bg: '#F8FAFC',
  fontSize: 'md',
  py: '6',
  px: '8',
  rounded: '3xl',
  // position: 'absolute',
  // top: { base: '70', md: '110' },
  // left: { base: '2', md: '10' },
  _hover: {
    bg: 'transparent',
  },
});

const white = defineStyle({
  color: '#222222',
  fontWeight: 'medium',
  bg: 'white.100',
  rounded: '3xl',
  fontSize: '10px',
  py: '0',
  height: '6',
  _hover: {
    bg: 'transparent',
  },
});

const demo = defineStyle({
  color: 'black',
  fontWeight: 'semibold',
  bg: 'blue.100',
  rounded: '3xl',
  fontSize: 'sm',
  py: '6',
  px: '6',
  height: '6',
  _hover: {
    bg: 'transparent',
  },
});

const custom = defineStyle({
  border: '0.91px solid #1C1C1C33',
});

const selection = defineStyle({
  border: 'none',
  borderRadius: '3xl',
  py: 1,
  bgColor: 'transparent',
  zIndex: '1000',
  _hover: {
    bgColor: '#ECEEF5',
    zIndex: '1000',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    darkOutline,
    solid,
    orange,
    transparent,
    custom,
    selection,
    white,
    demo,
    settingsOutline,
    redOutline,
  },
});
