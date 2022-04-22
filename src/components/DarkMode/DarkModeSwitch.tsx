import { useContext } from "react"
import { DarkThemeContext } from "./DarkModeProvider"
import DarkModeIcon from "@mui/icons-material/DarkMode"

export const DarkModeSwitch = () => {
  const DarkModeSwitchContext = useContext(DarkThemeContext)

  return (
    <>
      {DarkModeSwitchContext.isDarkMode ? (
        <DarkModeIcon
          sx={{ color: "#fbff00", cursor: "pointer" }}
          fontSize="large"
          onClick={DarkModeSwitchContext.setDarkMode}
        />
      ) : (
        <DarkModeIcon
          sx={{ color: "#80869d", cursor: "pointer" }}
          fontSize="large"
          onClick={DarkModeSwitchContext.setDarkMode}
        />
      )}
    </>
  )
}
