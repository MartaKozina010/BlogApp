import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import { BlogHome } from "./components/Pages/BlogHome"
import { AboutUs } from "./components/Pages/AboutUs"
import { Features } from "./components/Pages/Features"
import { Pricing } from "./components/Pages/Pricing"
import { Faq } from "./components/Pages/Faq"
import { Blog } from "./components/Pages/Blog"
import { ContactUs } from "./components/Pages/ContactUs"
import React from "react"
import { DarkModeProvider } from "./components/DarkMode/DarkModeProvider"
import { GlobalStyles } from "./utils/theme"
import { Articles } from "./components/ArticleFetch"

function App() {
  return (
    <Articles.Provider search="business">
      <DarkModeProvider>
        <Header />
        <GlobalStyles />
        <Routes>
          <Route path="/BlogApp" element={<BlogHome />} />
          <Route path="/BlogApp/:id" element={<Blog />} />
          <Route path="/BlogApp/aboutUs" element={<AboutUs />} />
          <Route path="/BlogApp/features" element={<Features />} />
          <Route path="/BlogApp/pricing" element={<Pricing />} />
          <Route path="/BlogApp/faq" element={<Faq />} />
          <Route path="/BlogApp/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </Articles.Provider>
  )
}

export default App
