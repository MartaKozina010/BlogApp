import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/Home"
import { AboutUs } from "./components/Pages/AboutUs"
import { Features } from "./components/Pages/Features"
import { Pricing } from "./components/Pages/Pricing"
import { Faq } from "./components/Pages/Faq"
import { Blog } from "./components/Pages/Blog"
import { ContactUs } from "./components/Pages/ContactUs"
import { useState } from "react"
import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [icon, setIcon] = useState("DARK 🌜")

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode ? setIcon("LIGHT 🌞") : setIcon("DARK 🌜")
  }

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <Header />
      <div onClick={setDarkMode}>{icon}</div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
