import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'black',
  fontWeight: 'medium',
  fontSize: 'md',
});

export const textTheme = defineStyleConfig({
  baseStyle,
  variants: {
    dark: {
      color: 'black',
      fontWeight: 'medium',
      fontSize: 'lg',
    },
    lightBlack: {
      color: 'brand.500',
      fontSize: 'sm',
      fontWeight: 'semibold',
    },
    header: {
      color: 'brand.400',
      fontWeight: 'semibold',
      fontSize: { base: 'lg', md: '2xl' },
    },
    heading: {
      fontWeight: 'bold',
      fontSize: { base: 'xl', md: '2xl' },
    },
    subHeading: {
      fontWeight: 'semibold',
      fontSize: { base: 'xl', md: '2xl' },
      textAlign: { base: 'center', md: 'start' },
    },
    grey: {
      color: 'gray.700',
      fontSize: 'md',
      textAlign: 'center',
      fontWeight: 'normal',
    },
    darkGray: {
      color: 'gray.800',
      fontSize: 'sm',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    white: {
      color: 'white.100',
      // fontWeight: "semibold",
    },
    status: {
      color: 'black',
      fontWeight: 'normal',
      fontSize: 'md',
    },
    link: {
      color: 'brand.400',
      textDecoration: 'underline',
      fontSize: 'sm',
      fontWeight: 'bold',
    },
    selection: {
      fontWeight: 'semibold',
      fontSize: 'sm',
    },
    code: {
      textAlign: 'center',
      fontSize: { base: 'lg', md: '2xl' },
      letterSpacing: { base: '2px', md: '5px' },
      fontWeight: 'semibold',
    },
    label: {
      color: 'black',
      fontWeight: 'normal',
      fontSize: 'xs',
    },
    largeText: {
      color: 'black',
      fontSize: { base: '4xl', md: '7xl' },
      fontWeight: 'semibold',
      letterSpacing: { lg: '-1px' },
    },
    token: {
      color: 'brand.100',
      fontWeight: 'semibold',
      fontSize: 'lg',
    },
    confirm: {
      color: 'brand.100',
      fontWeight: 'semibold',
    },
    faqHeader: {
      color: 'brand.300',
      fontSize: 'xl',
      fontWeight: 'semibold',
    },
    faqBody: {
      color: 'blue.50',
      fontSize: 'lg',
      fontWeight: 'normal',
    },
    checkbox: {
      color: 'brand.400',
      fontWeight: 'normal',
      fontSize: 'xs',
    },
    green: {
      color: 'green.600',
      fontSize: { base: 'lg', md: 'xl' },
      fontWeight: 'semibold',
    },
    blue: {
      color: 'blue.400',
      fontSize: 'xs',
      fontWeight: 'semibold',
      letterSpacing: '1px',
    },
    modal: {
      color: '#475467',
      fontSize: 'sm',
    },
    lightGreen: {
      color: 'green.600',
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    helper: {
      fontSize: 'xs',
      color: '#57606A',
    },
    settings: {
      fontWeight: 'semibold',
      fontSize: 'sm',
      color: 'brand.600',
    },
    settingsHeader: {
      fontSize: '2xl',
      color: 'brand.600',
    },
  },
});
