import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { buttonTheme } from './button';
import { cardTheme } from './card';
import { colors } from './colors';
import { dividerTheme } from './divider';
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './font';
import { modalTheme } from './modal';
import { popoverTheme } from './popover';
import { stepperTheme } from './stepper';
import { textTheme } from './text';

export const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  components: {
    Button: buttonTheme,
    Card: cardTheme,
    Text: textTheme,
    Divider: dividerTheme,
    Modal: modalTheme,
    Stepper: stepperTheme,
    Popover: popoverTheme,
  },
});
