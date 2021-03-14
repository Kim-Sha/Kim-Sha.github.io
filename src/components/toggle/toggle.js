import React, { useContext } from "react"
import { ThemeContext } from "../../templates/theme-context"
import { CgDarkMode } from "react-icons/cg"

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
      className={`focus:outline-none ${
        theme === "dark" ? "text-front-2" : "text-front-3 lg:text-front"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onKeyDown={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <CgDarkMode className="w-8 h-8 lg:w-14 lg:h-14" />
    </button>
  )
}
