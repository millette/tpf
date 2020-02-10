// npm
import { merge } from "theme-ui"
import theme1 from "@theme-ui/preset-polaris"

const theme = merge(theme1, {
  useColorSchemeMediaQuery: true,
  buttons: {
    rabbot: {
      cursor: "pointer",
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      "&:hover": {
        bg: "dark",
      },
    },
    secondary: {
      cursor: "pointer",
      fontWeight: "bold",
      color: "white",
      bg: "secondary",
      "&:hover": {
        bg: "dark",
      },
    },
  },
})

export default theme
