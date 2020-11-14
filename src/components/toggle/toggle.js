import React, { useContext } from "react"
import { ThemeContext } from "../../templates/theme-context"

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === "dark"
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  )
}