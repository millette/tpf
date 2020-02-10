// npm
import { useColorMode, Button } from "theme-ui"

const Cols = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </Button>
  )
}

export default Cols
