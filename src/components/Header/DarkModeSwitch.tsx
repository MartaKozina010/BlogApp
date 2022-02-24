import { useContext } from "react"
import { DarkThemeContext } from "../../utils/DarkModeProvider"

export const DarkModeSwitch = () => {
  const DarkModeSwitchContext = useContext(DarkThemeContext)

  return (
    <img
      src={DarkModeSwitchContext.isDarkMode ? "sun.png" : "night-mode.png"}
      onClick={DarkModeSwitchContext.setDarkMode}
    />
  )
}
