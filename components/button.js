/** @jsx jsx */

import { jsx } from "theme-ui"

export default ({ children }) => (
  <button
    sx={{
      borderRadius: "3px",
      /*
      border: "1px solid black",
      color: "pink",
      padding: "0.5em 1em",
      cursor: "pointer",
      fontSize: "1.1em",
      */
    }}
  >
    {children}
  </button>
)
