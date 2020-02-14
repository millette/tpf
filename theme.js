// npm
import { merge } from "theme-ui"
import { future as theme1 } from "@theme-ui/presets"
// import { system as theme1 } from "@theme-ui/presets"
// import { tosh as theme1 } from "@theme-ui/presets"
// import { polaris as theme1 } from "@theme-ui/presets"

const theme = merge(theme1, {
  useColorSchemeMediaQuery: true,
  buttons: {
    rabbot: {
      cursor: "pointer",
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      "&:hover": {
        bg: "highlight",
      },
    },
    secondary: {
      cursor: "pointer",
      fontWeight: "bold",
      color: "white",
      bg: "secondary",
      "&:hover": {
        bg: "highlight",
      },
    },
  },
})

export default theme
