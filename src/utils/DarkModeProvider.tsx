import React, { createContext, useEffect, useState } from "react"
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
  const getSessionStorage = (key: string, value: boolean) => {
    const storage = sessionStorage.getItem(key)
    return !storage ? value : JSON.parse(storage)
  }

  const [isDarkMode, setIsDarkMode] = useState(getSessionStorage("mode", false))

  useEffect(() => {
    sessionStorage.setItem("mode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

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
