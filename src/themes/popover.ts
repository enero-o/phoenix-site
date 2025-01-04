import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  content: {
    padding: 0, 
    bg: "#fff",
    border: "none",
    borderRadius: "16",
    boxShadow: "0px 8.02px 30.07px 0px #0000001F",
    top: "70px",
    w: '240px'
  },
})
export const popoverTheme = defineMultiStyleConfig({ baseStyle })