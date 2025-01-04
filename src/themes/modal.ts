import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "blackAlpha.800",
  },
  body: {
    // bg: `#1E1E1E`,
    // paddingInline: "1",
  },
  dialog: {
    // bg: `#1E1E1E`,
    marginInline: "2",
    borderRadius: "14",
    paddingBlock: 8,
    paddingInline: 0,
    backgroundColor: "white.100",
  },
  closeButton: {
    // color: "white",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});