// theme.ts
// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react"
// 2. Add your color mode config
const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config, 
    base: {
        width : "100%",
        color : "white",
        rounded : "lg",
        bg : "#1b1b1b36",
        boxShadow : "xl"
      }})
export default theme