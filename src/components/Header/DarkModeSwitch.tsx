import { useContext } from "react"
import { DarkThemeContext } from "../../utils/DarkModeProvider"

export const DarkModeSwitch = () => {
  const DarkModeSwitchContext = useContext(DarkThemeContext)

  return (
    <span onClick={DarkModeSwitchContext.setDarkMode}>
      {DarkModeSwitchContext.isDarkMode ? "🌞" : "🌜"}
    </span>
  )
}
