import React, { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./theme"

export const DarkThemeContext = createContext<ValueType>({
  isDarkMode: false,
  setDarkMode: () => undefined,
})

type ValueType = {
  isDarkMode: boolean
  setDarkMode: () => void
}

export const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </DarkThemeContext.Provider>
  )
}

// useEffect(() => {
//     localStorage.setItem("darkModeStatus", DarkModeSwitchContext.isDarkMode.toString())
//   }, [DarkModeSwitchContext.isDarkMode]);
