// npm
import Link from "next/link"
import { useColorMode, Button } from "theme-ui"

const Cols = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </Button>
    </>
  )
}

export default Cols
